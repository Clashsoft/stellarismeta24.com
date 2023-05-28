import {Injectable} from '@nestjs/common';
import {FilterQuery, Model, Types} from "mongoose";
import {CreateEmpire, Empire, EmpireDoc, EmpireRating} from "@stellarismeta24.com/types";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class EmpireService {
  constructor(
    @InjectModel(Empire.name) private readonly model: Model<Empire>,
  ) {
  }

  async create(dto: CreateEmpire): Promise<EmpireDoc> {
    return this.model.create(dto);
  }

  async findAll(filter: FilterQuery<Empire> = {}): Promise<EmpireDoc[]> {
    if (!filter.$text) {
      return this.model.find(filter).exec();
    }
    return this.model
      .find(filter, {score: {$meta: "textScore"}})
      .sort({score: {$meta: "textScore"}})
      .exec();
  }

  async findRandom(): Promise<EmpireDoc> {
    return (await this.model.aggregate([{$sample: {size: 1}}]).exec())[0];
  }

  async findOne(id: Types.ObjectId): Promise<EmpireDoc | null> {
    return this.model.findById(id).exec();
  }

  async findTags(): Promise<string[]> {
    return this.model.distinct('tags').exec();
  }

  async addRating(id: Types.ObjectId, dto: EmpireRating): Promise<Empire | null> {
    if (dto.oldRating) {

    }

    return this.model.findByIdAndUpdate(id, dto.oldRating ? [
      // rating = (old.rating * old.ratings - dto.oldRating + dto.rating) / old.ratings
      // => rating = old.rating + (dto.rating - dto.oldRating) / old.ratings
      {
        $set: {
          rating: {
            $add: [
              '$rating',
              {
                $divide: [
                  dto.rating - dto.oldRating,
                  '$ratings',
                ],
              },
            ],
          },
        },
      },
    ] : [
      // rating = (old.rating * old.ratings + dto.rating) / (old.ratings + 1)
      {
        $set: {
          rating: {
            $divide: [
              {
                $add: [
                  {$multiply: ['$rating', '$ratings']},
                  dto.rating,
                ]
              },
              {$add: ['$ratings', 1]},
            ],
          },
        },
      },
      {
        $set: {
          ratings: {
            $add: ['$ratings', 1],
          },
        },
      },
    ], {new: true});
  }

  async remove(id: Types.ObjectId): Promise<EmpireDoc | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

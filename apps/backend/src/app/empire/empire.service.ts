import {Injectable} from '@nestjs/common';
import {Model, Types} from "mongoose";
import {CreateEmpireDto, Empire, EmpireDoc} from "@stellarismeta24.com/types";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class EmpireService {
  constructor(
    @InjectModel(Empire.name) private readonly model: Model<Empire>,
  ) {
  }

  async create(dto: CreateEmpireDto): Promise<EmpireDoc> {
    return this.model.create(dto);
  }

  async findAll(): Promise<EmpireDoc[]> {
    return this.model.find().exec();
  }

  async findRandom(): Promise<EmpireDoc> {
    return (await this.model.aggregate([{$sample: {size: 1}}]).exec())[0];
  }

  async findOne(id: Types.ObjectId): Promise<EmpireDoc | null> {
    return this.model.findById(id).exec();
  }

  async remove(id: Types.ObjectId): Promise<EmpireDoc | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

import {Body, Controller, Delete, Get, Param, Post, Query,} from '@nestjs/common';
import {EmpireService} from './empire.service';
import {CreateEmpire, Empire, EmpireFilter, EmpireRating} from "@stellarismeta24.com/types";
import {NotFound, ObjectIdPipe} from "@mean-stream/nestx";
import {FilterQuery, Types} from "mongoose";
import {ApiCreatedResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";

@Controller('empires')
@ApiTags('Empires')
export class EmpireController {
  constructor(
    private readonly empireService: EmpireService,
  ) {
  }

  @Post()
  @ApiCreatedResponse({type: Empire})
  create(@Body() createEmpireDto: CreateEmpire) {
    return this.empireService.create(createEmpireDto);
  }

  @Get()
  @ApiOkResponse({type: [Empire]})
  async findAll(
    @Query() filter?: EmpireFilter,
  ): Promise<Empire[]> {
    return this.empireService.findAll(filter && this.convertFilter(filter));
  }

  @Get('random')
  @ApiOkResponse({type: Empire})
  async findRandom(): Promise<Empire> {
    return this.empireService.findRandom();
  }

  @Get('tags')
  @ApiOkResponse({type: [String]})
  async findTags(): Promise<string[]> {
    return this.empireService.findTags();
  }

  @Get(':id')
  @ApiOkResponse({type: Empire})
  @NotFound()
  async findOne(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
  ): Promise<Empire | null> {
    return this.empireService.findOne(id);
  }

  @Post(':id/ratings')
  @ApiOkResponse({type: Empire})
  @NotFound()
  async addRating(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
    @Body() dto: EmpireRating,
  ): Promise<Empire | null> {
    return this.empireService.addRating(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({type: Empire})
  @NotFound()
  async remove(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
  ): Promise<Empire | null> {
    return this.empireService.remove(id);
  }

  private convertFilter(filter: EmpireFilter): FilterQuery<Empire> {
    const {text, tags, ...rest} = filter;
    const result: FilterQuery<Empire> = rest;
    if (text) {
      result.$text = {$search: text};
    }
    if (tags) {
      result.tags = {$all: tags};
    }
    return result;
  }
}

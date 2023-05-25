import {Body, Controller, Delete, Get, Param, Post,} from '@nestjs/common';
import {EmpireService} from './empire.service';
import {CreateEmpireDto, Empire} from "@stellarismeta24.com/types";
import {NotFound, ObjectIdPipe} from "@mean-stream/nestx";
import {Types} from "mongoose";
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
  create(@Body() createEmpireDto: CreateEmpireDto) {
    return this.empireService.create(createEmpireDto);
  }

  @Get()
  @ApiOkResponse({type: [Empire]})
  async findAll(): Promise<Empire[]> {
    return this.empireService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: Empire})
  @NotFound()
  async findOne(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
  ): Promise<Empire | null> {
    return this.empireService.findOne(id);
  }

  @Delete(':id')
  @ApiOkResponse({type: Empire})
  @NotFound()
  async remove(
    @Param('id', ObjectIdPipe) id: Types.ObjectId,
  ): Promise<Empire | null> {
    return this.empireService.remove(id);
  }
}

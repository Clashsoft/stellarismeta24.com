import {ApiPropertyOptional, OmitType, PartialType, PickType} from "@nestjs/swagger";
import {Empire} from "../schema/empire.schema";

import {Type} from "@nestjs/common";
import {IsOptional, IsString} from "class-validator";

export class CreateEmpire extends (OmitType(Empire, [
  '_id',
] as const) as Type<Omit<Empire, '_id'>>) {
}

export class EmpireFilter extends PartialType(PickType(Empire, [
  'gameVersion',
  'tags',
] as const)) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  text?: string;
}

import {ApiProperty, ApiPropertyOptional, OmitType, PartialType, PickType} from "@nestjs/swagger";
import {Empire} from "../schema/empire.schema";

import {Type} from "@nestjs/common";
import {IsOptional, IsString, Max, Min} from "class-validator";

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

export class EmpireRating extends PickType(Empire, ['rating'] as const) {
  @ApiPropertyOptional({minimum: 0, maximum: 5})
  @IsOptional()
  @Min(0)
  @Max(5)
  oldRating?: number;
}

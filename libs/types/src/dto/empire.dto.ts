import {OmitType} from "@nestjs/swagger";
import {Empire} from "../schema/empire.schema";

import {Type} from "@nestjs/common";

export class CreateEmpireDto extends (OmitType(Empire, [
  '_id',
] as const) as Type<Omit<Empire, '_id'>>) {
}
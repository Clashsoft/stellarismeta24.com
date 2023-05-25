import {DTO} from "@mean-stream/nestx";
import {Empire} from "./schema/empire.schema";

export * from './schema/empire.schema';
export * from './dto/empire.dto';

export type EmpireDto = DTO<Empire>;

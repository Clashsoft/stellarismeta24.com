import {DTO} from "@mean-stream/nestx";
import {Empire} from "./schema/empire.schema";
import {CreateEmpire, EmpireFilter, EmpireRating} from "./dto/empire.dto";

export * from './schema/empire.schema';
export * from './dto/empire.dto';

export type EmpireDto = DTO<Empire>;
export type CreateEmpireDto = DTO<CreateEmpire>;
export type FilterEmpireDto = DTO<EmpireFilter>;
export type EmpireRatingDto = DTO<EmpireRating>;

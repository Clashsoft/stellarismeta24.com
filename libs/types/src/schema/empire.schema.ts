import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {Types} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Doc} from "@mean-stream/nestx";

export interface Translatable {
  key: string;
  literal?: boolean;
  variables?: {
    key: string | number;
    value: Translatable;
  }[];
}

export interface Species {
  class: string;
  portrait: string;
  species_name: Translatable;
  species_plural: Translatable;
  species_adjective: Translatable;
  species_bio?: string;
  name_list: string;
  gender: string;
  trait: string | string[];
}

export interface Ruler {
  gender: string;
  name: {
    full_names: Translatable;
    use_full_regnal_name?: boolean;
  };
  ruler_title?: Translatable;
  portrait: string;
  texture: number;
  attachment: number;
  clothes: number;
  trait?: string;
  leader_class: string;
}

export interface Flag {
  icon: {
    category: string;
    file: string;
  };
  background: {
    category: string;
    file: string;
  };
  colors: string[];
}

export interface EmpireDesign {
  key: string;
  ship_prefix: Translatable;
  species: Species;
  secondary_species?: Species;
  name: Translatable;
  adjective: Translatable;
  authority: string;
  government: string;
  planet_name: Translatable;
  planet_class: string;
  system_name: Translatable;
  initializer: string;
  graphical_culture: string;
  city_graphical_culture: string;
  empire_flag: Flag;
  ruler: Ruler;

  spawn_as_fallen: boolean;
  ignore_portrait_duplication: boolean;
  room: string;
  spawn_enabled: boolean;
  ethic: string | string[];
  civics?: string[];
  origin: string;
}

export type CustomEmpireDesigns = Record<string, EmpireDesign>;

@Schema()
export class Empire {
  @ApiProperty()
  _id!: Types.ObjectId;

  @Prop()
  @ApiPropertyOptional()
  name?: string;

  @Prop()
  @ApiPropertyOptional()
  description?: string;

  @Prop({index: 1})
  @ApiProperty()
  gameVersion?: string;

  @Prop({index: 1})
  @ApiProperty()
  tags!: string[];

  @Prop({type: Object})
  @ApiProperty()
  design!: EmpireDesign;
}

export const EmpireSchema = SchemaFactory.createForClass(Empire).index({
  name: 'text',
  description: 'text',
  'design.key': 'text',
});
export type EmpireDoc = Doc<Empire>;

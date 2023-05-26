import {CustomEmpireDesigns} from "@stellarismeta24.com/types";
import {Jomini} from "jomini";

export async function readCustomEmpireDesigns(input: string): Promise<CustomEmpireDesigns> {
  const parser = await Jomini.initialize();
  return parser.parseText(input, {
    typeNarrowing: 'unquoted',
  });
}

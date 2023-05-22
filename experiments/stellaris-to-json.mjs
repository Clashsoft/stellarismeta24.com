import {Jomini} from "jomini";
import fs from "fs";

const input = fs.readFileSync('./user_empire_designs_v3.4.txt', 'utf8');
const parser = await Jomini.initialize();
const out = parser.parseText(input);
fs.writeFileSync('./user_empire_designs_v3.4.json', JSON.stringify(out, null, 2));

parser.write((writer) => {
  writer.start_mixed_mode()
})

import {Jomini, Writer} from "jomini";
import fs from "fs";

const input = fs.readFileSync('./user_empire_designs_v3.4.txt', 'utf8');
const parser = await Jomini.initialize();
const out = parser.parseText(input);
fs.writeFileSync('./user_empire_designs_v3.4.json', JSON.stringify(out, null, 2));

const result = parser.write((writer) => {
  writeAny(writer, out);
});
fs.writeFileSync('./user_empire_designs_v3.4.back.txt', result);

/**
 * @param writer {Writer}
 * @param obj {any}
 */
function writeAny(writer, obj) {
  if (Array.isArray(obj)) {
    writer.write_array_start();
    for (const item of obj) {
      writeAny(writer, item);
    }
    writer.write_end();
  } else switch (typeof obj) {
    case 'string':
      writer.write_quoted(obj);
      break;
    case 'number':
      if (Number.isInteger(obj)) {
        writer.write_integer(obj);
      } else {
        writer.write_f64(obj);
      }
      break;
    case 'boolean':
      writer.write_bool(obj);
      break;
    case 'object':
      if (obj instanceof Date) {
        writer.write_date(obj);
      } else if (obj) {
        writer.write_object_start();
        for (const [key, value] of Object.entries(obj)) {
          if (/^[a-zA-Z_]+$/.test(key)) {
            writer.write_unquoted(key);
          } else {
            writer.write_quoted(key);
          }
          writer.write_operator('=');
          writeAny(writer, value);
        }
        writer.write_end();
      }
      break;
  }
}

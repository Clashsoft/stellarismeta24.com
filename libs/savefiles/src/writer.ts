import {Jomini, Writer} from "jomini";
import {CustomEmpireDesigns, EmpireDesign} from "@stellarismeta24.com/types";

const FLAT_ARRAY_KEYS = [
  'ethic',
  'trait',
];
const UNQUOTED_KEYS = [
  'gender',
];

export async function writeCustomEmpireDesign(design: EmpireDesign): Promise<Uint8Array> {
  return writeCustomEmpireDesigns({[design.key]: design});
}

export async function writeCustomEmpireDesigns(designs: CustomEmpireDesigns): Promise<Uint8Array> {
  const jomini = await Jomini.initialize();
  return jomini.write((writer) => writeEntries(writer, designs));
}

function writeKeyValue(writer: Writer, key: string, value: unknown) {
  if (/^[a-zA-Z_]+$/.test(key)) {
    writer.write_unquoted(key);
  } else {
    writer.write_quoted(key);
  }
  writer.write_operator('=');
  writeunknown(writer, value, key);
}

function writeObject(writer: Writer, obj: object) {
  writer.write_object_start();
  writeEntries(writer, obj);
  writer.write_end();
}

function writeEntries(writer: Writer, obj: object) {
  for (const [key, value] of Object.entries(obj)) {
    if (FLAT_ARRAY_KEYS.includes(key) && Array.isArray(value)) {
      for (const item of value) {
        writeKeyValue(writer, key, item);
      }
    } else {
      writeKeyValue(writer, key, value);
    }
  }
}

function writeArray(writer: Writer, obj: unknown[]) {
  writer.write_array_start();
  for (const item of obj) {
    writeunknown(writer, item);
  }
  writer.write_end();
}

function writeunknown(writer: Writer, obj: unknown, key?: string) {
  if (Array.isArray(obj)) {
    writeArray(writer, obj);
  } else switch (typeof obj) {
    case 'string':
      if (key && UNQUOTED_KEYS.includes(key)) {
        writer.write_unquoted(obj);
      } else {
        writer.write_quoted(obj);
      }
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
        writeObject(writer, obj);
      }
      break;
  }
}

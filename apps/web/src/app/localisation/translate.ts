import *  as translations from './translations.json';

export type TranslationKey = keyof typeof translations;

export function translate(key: TranslationKey | string) {
  return translations[key as TranslationKey] || key;
}

export const colors = {
  'W': 'white',
  'T': '#eee',
  'g': '#808080',
  'L': '#c3b091',
  'P': '#e16e6e',
  'R': '#fc5646',
  'S': '#e49c2a',
  'H': '#fbaa29',
  'Y': '#f7fc34',
  'G': '#87ffcf',
  'E': '#87ffcf',
  'B': '#33a7ff',
  'l': '#33a7ff',
  'M': '#a335ee',
  '_': '#f0f',
};

export function toColor(code: string): string | undefined {
  return (colors as Record<string, string>)[code];
}

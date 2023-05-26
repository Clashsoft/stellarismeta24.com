import *  as translations from './translations.json';

export type TranslationKey = keyof typeof translations;

export function translate(key: TranslationKey | string) {
  return translations[key as TranslationKey] || key;
}

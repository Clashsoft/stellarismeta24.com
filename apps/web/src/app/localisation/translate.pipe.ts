import {Pipe, PipeTransform} from '@angular/core';
import {toColor, translate, TranslationKey} from "./translate";

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(key: TranslationKey | string): string {
    let translated = translate(key);
    while (translated.includes('$')) {
      translated = translated.replace(/\$([\w_]+)\$/g, (_, key) => translate(key));
    }
    while (translated.includes('§')) {
      translated = translated.replace(/§([\w_!])/g, (_, key) => {
        if (key === '!') {
          return '</span>';
        } else {
          return `<span style="color: ${toColor(key)}">`;
        }
      });
    }

    return translated;
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {toColor, translate, TranslationKey} from "./translate";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private readonly domSanitizer: DomSanitizer,
  ) {
  }

  transform(key: TranslationKey | string): string | SafeHtml {
    let translated = translate(key);
    while (translated.includes('$')) {
      translated = translated.replace(/\$([\w_]+)\$/g, (_, key) => translate(key));
    }
    let isHtml = false;
    while (translated.includes('§')) {
      translated = translated.replace(/§([\w_!])/g, (_, key) => {
        if (key === '!') {
          return '</span>';
        } else {
          return `<span style="color: ${toColor(key)}">`;
        }
      });
      isHtml = true;
    }

    if (isHtml) {
      return this.domSanitizer.bypassSecurityTrustHtml(translated);
    }

    return translated;
  }
}

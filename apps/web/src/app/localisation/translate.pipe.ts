import {Pipe, PipeTransform} from '@angular/core';
import {translate, TranslationKey} from "./translate";

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(key: TranslationKey | string): string {
    return translate(key);
  }
}

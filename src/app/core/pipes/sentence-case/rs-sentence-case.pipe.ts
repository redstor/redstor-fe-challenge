import { Pipe, PipeTransform } from '@angular/core';
import { RSSentenceCaseHelper } from '../../helpers/sentence-case/sentence-case.helper';

@Pipe({
  name: 'rsSentenceCase',
})
export class RSSentenceCasePipe implements PipeTransform
{
  constructor(private rsSentenceCaseHelper: RSSentenceCaseHelper)
  { }
  transform(value: string, ...args: any[]): string
  {
    return this.rsSentenceCaseHelper.getValue(value, args);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RSSentenceCasePipe } from './rs-sentence-case.pipe';
import { RSSentenceCaseHelper } from '../../helpers/sentence-case/sentence-case.helper';


@NgModule({
  declarations: [
    RSSentenceCasePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RSSentenceCasePipe,
  ],
  providers: [
    RSSentenceCaseHelper
  ]
})
export class RSSentenceCasePipeModule { }

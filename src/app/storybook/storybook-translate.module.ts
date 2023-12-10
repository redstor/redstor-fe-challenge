import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpLoaderFactory } from "@app/app.module";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";

/**
  A utility module adding I18N support for Storybook stories
 **/
@NgModule({
   imports: [TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
 })
 export class StorybookTranslateModule {
   constructor(translateService: TranslateService) {
      translateService.addLangs(['en', 'pt']);
      translateService.setDefaultLang('en');
   }
 }
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const translateFactory: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appTranslateFactory,
  deps: [TranslateService],
  multi: true
};

export function appTranslateFactory(translate: TranslateService)
{
  return (): void =>
  {
    translate.setDefaultLang('en');
    translate.use('en');
  };
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

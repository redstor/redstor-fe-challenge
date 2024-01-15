import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // add a constructor to import the translator service
  private readonly translateService: TranslateService = inject(TranslateService);
  language = this.translateService.getDefaultLang();

  constructor() {
    this.translateService.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe((langEvent) => {
        this.language = langEvent.lang;
      });
  }

  selectLanguage(lang: string) {
    this.translateService.use(lang);
  }

}

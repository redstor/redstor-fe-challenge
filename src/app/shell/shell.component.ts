import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  standalone: true,
  imports: [MatToolbarModule, TranslateModule, MatButtonModule]
})
export class ShellComponent {
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

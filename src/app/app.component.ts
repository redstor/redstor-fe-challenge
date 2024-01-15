import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // add a constructor to import the translator service
  constructor(private readonly translateService: TranslateService) {
    this.translateService.addLangs(['en', 'pt']);
    this.translateService.setDefaultLang('en');
  }
}

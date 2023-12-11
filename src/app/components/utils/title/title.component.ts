import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  pageTitle: string = 'Redstor FE Challenger';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language
  }

  changeLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    this.translate.use(newLang);
  }

  ngOnInit(): void {
  }

  
}
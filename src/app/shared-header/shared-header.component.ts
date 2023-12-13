import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatProgressBarModule, MatMenuModule, MatIconModule, RouterModule, TranslateModule]
})
export class SharedHeaderComponent {
  @Input() toolbarTitle: string = '';
  @Input() breadcrumbs: Array<{ label: string; link?: string }> = [];
  @Input() isLoading: boolean = false;

  constructor(private translateService: TranslateService) {}

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}

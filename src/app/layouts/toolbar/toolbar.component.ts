import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

  constructor(private translate: TranslateService) { }

  changeLangToEN():void
  {
    this.translate.use('en');
  }

  changeLangToFA():void
  {
    this.translate.use('fa');
  }
}

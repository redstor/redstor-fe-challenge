import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { IBreadcrumb, IPhoto } from '@app/interfaces';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: IBreadcrumb[] = [];
}

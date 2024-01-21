import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadingSelectors, State } from './store/loading';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  isLoading$ = this.store.pipe(select(LoadingSelectors.selectLoading));

  constructor(
    private store: Store<State>,
  ) {}

}

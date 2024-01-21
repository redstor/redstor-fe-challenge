import { createAction } from '@ngrx/store';

export namespace LoadingActions {
  export const showLoading = createAction('[Loading] Show Loading');
  export const hideLoading = createAction('[Loading] Hide Loading');
}

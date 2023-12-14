import { createAction, props } from '@ngrx/store';

export const updateBreadcrumbs = createAction(
  '[Breadcrumb] Update Breadcrumbs',
  props<{ breadcrumbs: Array<{ label: string; link?: string }> }>()
);

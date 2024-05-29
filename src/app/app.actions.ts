import { createAction, props } from '@ngrx/store';

export const setTitle = createAction(
  '[App Component] Set Title',
  props<{ title: string }>()
);

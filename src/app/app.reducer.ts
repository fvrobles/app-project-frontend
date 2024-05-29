import { createReducer, on } from '@ngrx/store';
import { setTitle } from './app.actions';

export const initialState: string = '';

export const titleReducer = createReducer(
  initialState,
  on(setTitle, (state, { title }) => title)
);

import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { peopleReducer } from './peopleReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  people: peopleReducer,
});

import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { moviesReducer } from './moviesReducer';
import { peopleReducer } from './peopleReducer';
import { favoritesReducer } from './favoritesReduces';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  people: peopleReducer,
  user: authReducer,
  favorites: favoritesReducer,
});

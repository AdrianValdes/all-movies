import { combineReducers } from 'redux';

import { moviesReducer } from './moviesReducer';
import { peopleReducer } from './peopleReducer';
import { favoritesReducer } from './favoritesReduces';
import { userReducer } from '../../../features/user/userSlice';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  people: peopleReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

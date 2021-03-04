import { combineReducers } from 'redux';
import userReducer from './userReducer';
import favoriteReducer from './favoriteReducer';
import animesReducer from './animesReducer';

export default combineReducers({
  user: userReducer,
  favorites: favoriteReducer,
  animes: animesReducer,
});

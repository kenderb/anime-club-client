import { combineReducers } from 'redux';
import userReducer from './userReducer';
import favoriteReducer from './favoriteReducer';
import animesReducer from './animesReducer';
import animeDetailsReducer from './animeDetailsReducer';

export default combineReducers({
  user: userReducer,
  favorites: favoriteReducer,
  animes: animesReducer,
  animeDetails: animeDetailsReducer,
});

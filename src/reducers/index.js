import { combineReducers } from 'redux';
import userReducer from './userReducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  user: userReducer,
  favorites: favoriteReducer,
});

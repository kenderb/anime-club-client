import {
  LOGIN_SUCCESS, LOGOUT_USER,
  SET_FAVORITE_ANIME,
} from './constans';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const userLogout = () => ({
  type: LOGOUT_USER,
});

export const setFavoriteAnimeUser = data => ({
  type: SET_FAVORITE_ANIME,
  payload: data,
});

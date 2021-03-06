import {
  LOGIN_SUCCESS, LOGOUT_USER,
  SET_FAVORITE_ANIME, GET_ALL_ANIMES,
  GET_ANIME_DETAIL,
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

export const getAnimes = data => ({
  type: GET_ALL_ANIMES,
  payload: data,
});

export const getAnimeDetail = data => ({
  type: GET_ANIME_DETAIL,
  payload: data,
});

import { REGISTER_USER, LOGIN_USER, IS_LOGGED_IN } from './constans';

export const registerUser = data => ({
  type: REGISTER_USER,
  payload: data,
});

export const logInUser = data => ({
  type: LOGIN_USER,
  payload: data,
});

export const userLoggedIn = data => ({
  type: IS_LOGGED_IN,
  payload: data,
});

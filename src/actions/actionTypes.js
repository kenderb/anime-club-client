import { REGISTER_USER, LOGIN_USER } from './constans';

export const registerUser = data => ({
  type: REGISTER_USER,
  payload: data,
});

export const logInUser = data => ({
  type: LOGIN_USER,
  payload: data,
});

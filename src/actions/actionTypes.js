import {
  LOGIN_SUCCESS, LOGOUT_USER,
} from './constans';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const userLogout = () => ({
  type: LOGOUT_USER,
});

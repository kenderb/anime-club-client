import REGISTER_USER from './constans';

export const registerUser = data => ({
  type: REGISTER_USER,
  payload: data,
});

export default registerUser;

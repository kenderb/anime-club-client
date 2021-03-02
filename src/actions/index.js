import magaClub from '../api/mangaClub';

import { registerUser } from './actionTypes';

const createUser = userData => async dispatch => {
  try {
    const {
      name, password, passwordConfirmation, email,
      registrationErrors, userType,
    } = userData;
    const response = await magaClub.post('/registrations', {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        user_type: userType,
      },
    }, {
      withCredentials: true,
    });
    dispatch(registerUser(response.data.user));
    return registrationErrors;
  } catch (error) {
    console.log(error.messages);
    return error;
  }
};

export default createUser;

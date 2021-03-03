import magaClub from '../api/mangaClub';

import {
  registerUser, logInUser, userLoggedIn, userLogout,
} from './actionTypes';

export const createUser = userData => async dispatch => {
  try {
    const {
      name, password, passwordConfirmation, email,
      userType,
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
    console.log(response);
    if (response.data.status === 'created') {
      dispatch(registerUser(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.messages);
    return error;
  }
};

export const loginUserAction = userData => async dispatch => {
  try {
    const {
      password, email,
    } = userData;
    const response = await magaClub.post('/sessions', {
      user: {
        email,
        password,
      },
    }, {
      withCredentials: true,
    });
    console.log(response);
    if (response.data.logged_in) {
      dispatch(logInUser(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.messages);
    return error;
  }
};

export const isLoggedIn = () => async dispatch => {
  try {
    const response = await magaClub.get('/logged_in', { withCredentials: true });
    console.log(response);
    if (response.data.logged_in) {
      dispatch(userLoggedIn(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.messages);
    return error;
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const response = await magaClub.delete('/logout', { withCredentials: true });
    console.log(response);
    if (response.data.logged_out) {
      dispatch(userLogout());
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error.messages);
    return error;
  }
};

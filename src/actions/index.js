import magaClub from '../api/mangaClub';

import {
  loginSuccess, userLogout,
  setFavoriteAnimeUser,
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
    if (response.data.status === 'created') {
      dispatch(loginSuccess(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
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
    if (response.data.logged_in) {
      dispatch(loginSuccess(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};

export const isLoggedIn = () => async dispatch => {
  try {
    const response = await magaClub.get('/logged_in', { withCredentials: true });
    if (response.data.logged_in) {
      dispatch(loginSuccess(response.data.user));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const response = await magaClub.delete('/logout', { withCredentials: true });
    if (response.data.logged_out) {
      dispatch(userLogout());
    } else {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};

export const setFavoriteAnime = data => async dispatch => {
  try {
    const { userId, animeId } = data;
    const response = await magaClub.post('/favorites', {
      favorite: {
        user_id: userId,
        anime_id: animeId,
      },
    }, { withCredentials: true });
    console.log(response.data.fivorites_user_list);
    if (response.data.status === 'created') {
      dispatch(setFavoriteAnimeUser(response.data.fivorites_user_list));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};

export const getUserFavorites = data => async dispatch => {
  try {
    const { userId } = data;
    console.log(data);
    const response = await magaClub.get('/favorites', {
      favorite: {
        id: userId,
      },
    }, { withCredentials: true });
    console.log(response);
    if (response.data.status === 200) {
      dispatch(setFavoriteAnimeUser(response.data.fivorites_user_list));
    } else {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

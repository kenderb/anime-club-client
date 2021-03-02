import magaClub from '../api/mangaClub';

import { registerUser } from './actionTypes';

const createUser = userData => async dispatch => {
  try {
    console.log(userData);
    const response = await magaClub.post('/registrations', {
      user: 'modified',
    }, {
      withCredentials: true,
    });
    dispatch(registerUser(response));
    return true;
  } catch (error) {
    return error;
  }
};

export default createUser;

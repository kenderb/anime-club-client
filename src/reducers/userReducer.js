import {
  LOGIN_SUCCESS, LOGOUT_USER,
} from '../actions/constans';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        ...action.payload,
      };
    case LOGOUT_USER:
      return {
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;

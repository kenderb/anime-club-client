import {
  REGISTER_USER, LOGIN_USER, IS_LOGGED_IN, LOGOUT_USER,
} from '../actions/constans';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        loggedIn: true,
        ...action.payload,
      };
    case LOGIN_USER:
      return {
        loggedIn: true,
        ...action.payload,
      };
    case IS_LOGGED_IN:
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

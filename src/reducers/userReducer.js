import { REGISTER_USER, LOGIN_USER } from '../actions/constans';

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
    default:
      return state;
  }
};

export default userReducer;

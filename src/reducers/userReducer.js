import REGISTER_USER from '../actions/constans';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        loggedIn: !state.loggedIn,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

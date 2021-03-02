import REGISTER_USER from '../actions/constans';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;

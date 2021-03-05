import {
  GET_ALL_ANIMES,
} from '../actions/constans';

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ANIMES:
      return action.payload;

    default:
      return state;
  }
};

export default favoriteReducer;

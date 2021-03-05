import {
  SET_FAVORITE_ANIME,
} from '../actions/constans';

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FAVORITE_ANIME:
      return action.payload;
    default:
      return state;
  }
};

export default favoriteReducer;

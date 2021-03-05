import {
  GET_ANIME_DETAIL,
} from '../actions/constans';

const favoriteReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ANIME_DETAIL:
      return action.payload;

    default:
      return state;
  }
};

export default favoriteReducer;

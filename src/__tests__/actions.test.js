import {
  loginSuccess, userLogout,
  setFavoriteAnimeUser, getAnimes,
  getAnimeDetail,
} from '../actions/actionTypes';

describe('Action Types for Animes', () => {
  it('loginSuccess return the right action type', () => {
    const action = loginSuccess();
    expect(action.type).toStrictEqual('LOGIN_SUCCESS');
  });
  it('userLogout return the right action type', () => {
    const action = userLogout();
    expect(action.type).not.toBe('');
  });
  it('setFavoriteAnimeUser return the right action type', () => {
    const action = setFavoriteAnimeUser();
    expect(action.type).toStrictEqual('SET_FAVORITE_ANIME');
  });
  it('getAnimes return the right action type', () => {
    const action = getAnimes();
    expect(action.type).not.toBe('');
  });
  it('getAnimeDetail return the right action payload', () => {
    const action = getAnimeDetail();
    expect(action.type).toStrictEqual('GET_ANIME_DETAIL');
  });
});

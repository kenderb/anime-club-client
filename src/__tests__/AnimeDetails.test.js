import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import combineReducers from '../reducers';
import AnimeDetails from '../components/AnimeDetails';

test('AnimeDetails renders correctly', () => {
  const mockObj = { params: 'some params' };
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <BrowserRouter>
        <AnimeDetails match={mockObj} />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

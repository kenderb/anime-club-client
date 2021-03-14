import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import combineReducers from '../reducers';
import AnimeCard from '../components/AnimeCard';

test('AnimeCard renders correctly', () => {
  const mockObj = { title: 'some title' };
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <BrowserRouter>
        <AnimeCard anime={mockObj} />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

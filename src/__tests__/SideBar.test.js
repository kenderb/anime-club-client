import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import combineReducers from '../reducers';
import SideBar from '../components/SideBar';

test('SideBar component renders correctly', () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

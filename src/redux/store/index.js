import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../ducks/user';
import { githubUsers } from '../ducks/user';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: githubUsers
});

export const store = createStore(reducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
sagaMiddleware.run(rootSaga);



import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhacer = compose(
  applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
);

export default createStore(reducers(history), enhacer);

sagaMiddleware.run(sagas);

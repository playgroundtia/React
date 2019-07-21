// import { persistStore } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import persistReducers from './persistReducers';
import sagas from './sagas';
import reducers from './reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhacer = compose(
  applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
);

const store = createStore(reducers(history), enhacer);
// const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store };

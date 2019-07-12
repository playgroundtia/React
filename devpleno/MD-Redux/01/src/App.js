import React from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import Counter from './Counter'
import { reducer } from './reducer'

const store = createStore(reducer, compose(
  applyMiddleware(logger)
))

function App() {
  return (
  <Provider store={store}>
     <Counter />
  </Provider>
  );
}

export default App;

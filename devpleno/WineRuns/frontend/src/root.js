import React from 'react';
import { hot } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import { store, persistor, history } from './redux';
import App from './app';

function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <>
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
            <BrowserRouter>
              <Route component={App} />
            </BrowserRouter>
          </>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default hot(module)(Root);

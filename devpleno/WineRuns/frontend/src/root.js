import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import { store, history } from './redux';
import App from './app';

function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default hot(module)(Root);

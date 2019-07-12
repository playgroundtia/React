import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';

const App = () => (
  <Switch>
    <Route path="/" component={MainPage} />
  </Switch>
);

export default App;

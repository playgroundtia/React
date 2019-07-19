import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '~/components/Header';
import { DASHBOARD, USERS, RUNS } from '~/routes';

const Dashboard = React.lazy(() => import('./dashboard'));
const Runs = React.lazy(() => import('./runs'));
const Users = React.lazy(() => import('./users'));

function Admin() {
  return (
    <>
      <Header />
      <React.Suspense fallback="Carregando...">
        <Switch>
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route path={USERS} component={Users} />
          <Route path={RUNS} component={Runs} />
        </Switch>
      </React.Suspense>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Admin);

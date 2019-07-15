import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '~/components/Header';
import { DASHBOARD } from '~/routes';

const Dashboard = React.lazy(() => import('./dashboard'));
const Runs = React.lazy(() => import('./runs'));

function Admin() {
  return (
    <>
      <Header />
      <React.Suspense fallback="Carregando...">
        <Switch>
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route component={Runs} />
        </Switch>
      </React.Suspense>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Admin);

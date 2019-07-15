import React from 'react';
import t from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { HOME, DASHBOARD } from '~/routes';

const Admin = React.lazy(() => import('~/pages/admin'));
const Home = React.lazy(() => import('~/pages/home'));

const Main = ({ auth, location }) => {
  const regex = /^\/admin/gi;

  if (auth.isAuth && location.pathname === HOME) {
    return <Redirect to={DASHBOARD} />;
  }

  if (!auth.isAuth && regex.test(location.pathname)) {
    return <Redirect to={HOME} />;
  }

  return (
    <React.Suspense
      fallback={
        <progress
          className="progress is-small is-primary indeterminate"
          max="100"
        />
      }
    >
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route component={Admin} />
      </Switch>
    </React.Suspense>
  );
};

Main.propTypes = {
  location: t.shape({
    pathname: t.string,
  }).isRequired,
  auth: t.shape({
    isAuth: t.bool,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Main);

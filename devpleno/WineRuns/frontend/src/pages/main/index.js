import React from 'react';
import t from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { HOME, DASHBOARD } from '../../routes';

const Admin = React.lazy(() => import('../admin'));
const Home = React.lazy(() => import('../home'));

const Main = ({ auth, location, redirect }) => {
  if (auth.isAuth && location.pathname === HOME) {
    return redirect(DASHBOARD);
  }

  if (!auth.isAuth && location.pathname === DASHBOARD) {
    return redirect(HOME);
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
        {auth.isAuth ? (
          <Route component={Admin} />
        ) : (
          <Route path={HOME} component={Home} />
        )}
      </Switch>
    </React.Suspense>
  );
};

Main.propTypes = {
  location: t.shape({
    pathname: t.string,
  }).isRequired,
  redirect: t.func.isRequired,
  auth: t.shape({
    isAuth: t.bool,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  redirect: router => dispatch(push(router)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

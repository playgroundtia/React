import React from 'react';
import t from 'prop-types';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Section, Level, Container } from 'react-bulma-components';

const All = React.lazy(() => import('./all'));
const User = React.lazy(() => import('./user'));

const Users = ({ location }) => {
  return (
    <>
      <Section className="is-title-bar">
        <Level renderAs="nav">
          <Level.Side align="left">
            <Level.Item>
              <ul>
                <li>Admin /</li>
                <li>Users</li>
              </ul>
            </Level.Item>
          </Level.Side>
        </Level>
      </Section>
      <Container>
        <div className="tabs is-medium">
          <ul>
            <li
              className={`${location.pathname === '/admin/users' &&
                'is-active'}`}
            >
              <NavLink to="/admin/users" exact>
                Users
              </NavLink>
            </li>
            <li
              className={`${location.pathname === '/admin/users/user' &&
                'is-active'}`}
            >
              <NavLink to="/admin/users/user" exact>
                User
              </NavLink>
            </li>
          </ul>
        </div>
        <Container fluid>
          <React.Suspense fallback="Loading...">
            <Switch>
              <Route exact path="/admin/users" component={All} />
              <Route path="/admin/users/user" component={User} />
            </Switch>
          </React.Suspense>
        </Container>
      </Container>
    </>
  );
};

Users.propTypes = {
  location: t.shape({
    pathname: t.string,
  }).isRequired,
};

export default Users;

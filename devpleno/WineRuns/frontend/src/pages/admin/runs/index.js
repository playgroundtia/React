import React from 'react';
import t from 'prop-types';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Section, Level, Container } from 'react-bulma-components';

const Historic = React.lazy(() => import('./historic'));
const Run = React.lazy(() => import('./run'));

const Runs = ({ location }) => {
  return (
    <>
      <Section className="is-title-bar">
        <Level renderAs="nav">
          <Level.Side align="left">
            <Level.Item>
              <ul>
                <li>Admin /</li>
                <li>Runs</li>
              </ul>
            </Level.Item>
          </Level.Side>
        </Level>
      </Section>
      <Section>
        <div className="tabs is-medium">
          <ul>
            <li
              className={`${location.pathname === '/admin/runs' &&
                'is-active'}`}
            >
              <NavLink to="/admin/runs" exact>
                Historic
              </NavLink>
            </li>
            <li
              className={`${location.pathname === '/admin/runs/run' &&
                'is-active'}`}
            >
              <NavLink to="/admin/runs/run" exact>
                Run
              </NavLink>
            </li>
          </ul>
        </div>
        <Container fluid>
          <React.Suspense fallback="Loading...">
            <Switch>
              <Route exact path="/admin/runs" component={Historic} />
              <Route path="/admin/runs/run" component={Run} />
            </Switch>
          </React.Suspense>
        </Container>
      </Section>
    </>
  );
};

Runs.propTypes = {
  location: t.shape({
    pathname: t.string,
  }).isRequired,
};

export default Runs;

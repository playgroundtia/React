import React from 'react';
import t from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';
import { Navbar, Button, Modal, Form, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCheck,
  faLock,
  faSignOutAlt,
  faSignInAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import ActionsCreators from '../../redux/actionsCreators';
import { HOME, USERS, TEACHERS, DASHBOARD, RUNS } from '../../routes';

const Logo = require('../../assets/images/Logo.png');

const Header = ({ signin, logout, showModal, hideModal, auth }) => {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = ({ email, passwd }) => {
    signin(email, passwd);
  };

  return (
    <>
      <Navbar color="dark" fixed="top" className="nav-padding">
        <Navbar.Brand>
          <Navbar.Item>
            <img src={Logo} alt="WineRuns" width="112" height="28" />
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            {!auth.isAuth && (
              <NavLink
                to={HOME}
                exact
                activeClassName="is-active activeNavBar"
                className="navbar-item navbarItemBar"
              >
                Home
              </NavLink>
            )}
            {auth.isAuth && auth.user.role === 'admin' && (
              <>
                <NavLink
                  to={DASHBOARD}
                  exact
                  activeClassName="is-active activeNavBar"
                  className="navbar-item navbarItemBar"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={USERS}
                  exact
                  activeClassName="is-active activeNavBar"
                  className="navbar-item navbarItemBar"
                >
                  Users
                </NavLink>
                <NavLink
                  to={TEACHERS}
                  exact
                  activeClassName="is-active activeNavBar"
                  className="navbar-item navbarItemBar"
                >
                  Teachers
                </NavLink>
              </>
            )}
            {auth.isAuth && auth.user.role === 'user' && (
              <>
                <NavLink
                  to={DASHBOARD}
                  exact
                  activeClassName="is-active activeNavBar"
                  className="navbar-item navbarItemBar"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={RUNS}
                  activeClassName="is-active activeNavBar"
                  className="navbar-item navbarItemBar"
                >
                  Runs
                </NavLink>
              </>
            )}
          </Navbar.Container>
          <Navbar.Container position="end">
            {auth.isAuth && (
              <Navbar.Item dropdown hoverable>
                <Navbar.Link style={{ color: '#00dfdf' }}>
                  {auth.user.name}
                </Navbar.Link>
                <Navbar.Dropdown>
                  <Navbar.Item>Profile</Navbar.Item>
                  <Navbar.Item>Tools</Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
            )}
            <div className="buttons">
              {auth.isAuth ? (
                <Button color="primary" onClick={logout}>
                  <Icon>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </Icon>
                  <strong>Log out</strong>
                </Button>
              ) : (
                <>
                  <Button color="light" onClick={showModal}>
                    <Icon>
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </Icon>
                    <span>Log in</span>
                  </Button>
                  <Button color="primary">
                    <Icon>
                      <FontAwesomeIcon icon={faUserCircle} />
                    </Icon>
                    <strong>Register</strong>
                  </Button>
                </>
              )}
            </div>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <Modal show={auth.isModalShow} showClose={false} onClose={hideModal}>
        <Modal.Card>
          <Modal.Card.Head onClose={hideModal}>
            <Modal.Card.Title>Log in</Modal.Card.Title>
          </Modal.Card.Head>
          <Modal.Card.Body>
            <form action="">
              <Form.Field>
                <Form.Label>E-mail</Form.Label>
                <Form.Control iconLeft iconRight>
                  <input
                    className={`${errors.email && 'is-danger'} ${watch() &&
                      !!watch().email &&
                      !errors.email &&
                      'is-success'} input is-medium`}
                    type="text"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email.message}</p>
                  )}
                  <Icon align="left">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Icon>
                  <Icon align="right">
                    <>
                      {errors.email && (
                        <FontAwesomeIcon color="red" icon={faCheck} />
                      )}
                      {watch() && !!watch().email && !errors.email && (
                        <FontAwesomeIcon color="green" icon={faCheck} />
                      )}
                    </>
                  </Icon>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Password</Form.Label>
                <Form.Control iconLeft iconRight>
                  <input
                    className={`${errors.passwd && 'is-danger'} ${watch() &&
                      !!watch().passwd &&
                      !errors.passwd &&
                      'is-success'} input is-medium`}
                    type="password"
                    name="passwd"
                    ref={register({
                      required: true,
                      minLength: 6,
                      message: 'Max 6 character size',
                    })}
                  />
                  {errors.passwd && (
                    <p className="help is-danger">{errors.passwd.message}</p>
                  )}
                  <Icon align="left">
                    <FontAwesomeIcon icon={faLock} />
                  </Icon>
                  <Icon align="right">
                    <>
                      {errors.passwd && (
                        <FontAwesomeIcon color="red" icon={faCheck} />
                      )}
                      {watch() && !!watch().passwd && !errors.passwd && (
                        <FontAwesomeIcon color="green" icon={faCheck} />
                      )}
                    </>
                  </Icon>
                </Form.Control>
              </Form.Field>
            </form>
          </Modal.Card.Body>
          <Modal.Card.Foot
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="buttons">
              <Button
                color="primary"
                size="medium"
                onClick={handleSubmit(onSubmit)}
              >
                <strong>Send</strong>
              </Button>
            </div>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    </>
  );
};

Header.propTypes = {
  signin: t.func.isRequired,
  showModal: t.func.isRequired,
  hideModal: t.func.isRequired,
  logout: t.func.isRequired,
  auth: t.shape({
    isModalShow: t.bool,
    isAuth: t.bool,
    user: t.shape({
      role: t.string,
      name: t.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  signin: (email, passwd) =>
    dispatch(ActionsCreators.signinRequest(email, passwd)),
  showModal: () => dispatch(ActionsCreators.showModal()),
  hideModal: () => dispatch(ActionsCreators.hideModal()),
  logout: () => dispatch(ActionsCreators.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

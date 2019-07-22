import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  Icon,
  Columns,
  Form,
  Notification,
  Button,
  Heading,
  Level,
} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
import useForm from 'react-hook-form';
import ActionsCreators from '~/redux/actionsCreators';

const User = ({ location, createUser, updateUser, users }) => {
  const { handleSubmit, register, errors, watch } = useForm({
    defaultValues: {
      email: location.state ? location.state.email : '',
      name: location.state ? location.state.name : '',
      role: location.state ? location.state.role : '',
      active: location.state ? location.state.active : '',
    },
  });
  const [showMessage, setShowMessage] = React.useState(false);

  // eslint-disable-next-line consistent-return
  const onSubmit = (values, e) => {
    if (location.state) {
      updateUser({ ...location.state, ...values });
      setShowMessage(true);
    } else {
      createUser(values);
      e.target.reset();
      setShowMessage(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-no-box-shadow">
        <header className="card-header">
          <Card.Header.Title>
            <Card.Header.Icon>
              <Icon>
                <FontAwesomeIcon icon={faUser} />
              </Icon>
              {location.state ? 'Edit details user' : 'Add details user'}
            </Card.Header.Icon>
          </Card.Header.Title>
        </header>
        {showMessage && (
          <Notification color={!users.error ? 'success' : 'danger'}>
            <Level renderAs="nav">
              <Level.Side align="left">
                <Level.Item>
                  <Heading size={5} subtitle>
                    {!users.error ? (
                      <strong>
                        {location.state
                          ? 'Edit successfully'
                          : 'Saved successfully'}
                      </strong>
                    ) : (
                      <strong> Error </strong>
                    )}
                  </Heading>
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  <Button remove onClick={() => setShowMessage(false)} />
                </Level.Item>
              </Level.Side>
            </Level>
          </Notification>
        )}
        <Card.Content>
          <Columns>
            <Columns.Column size={4}>
              <div className="field">
                <Form.Label>Email</Form.Label>
                <div className="control">
                  <input
                    className={`${errors.email && 'is-danger'} ${watch() &&
                      !!watch().email &&
                      !errors.email &&
                      'is-success'} input is-medium`}
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'invalid email address',
                      },
                    })}
                    name="email"
                    type="text"
                  />
                  {errors.email && errors.email.type === 'pattern' && (
                    <p className="help is-danger">Invalid email address</p>
                  )}
                  {errors.email && errors.email.type === 'required' && (
                    <p className="help is-danger">This field is required</p>
                  )}
                </div>
              </div>
            </Columns.Column>
            <Columns.Column size={8}>
              <div className="field">
                <Form.Label>Name</Form.Label>
                <div className="control">
                  <input
                    className={`${errors.name && 'is-danger'} ${watch() &&
                      !!watch().name &&
                      !errors.name &&
                      'is-success'} input is-medium`}
                    ref={register({
                      required: 'This field is required',
                    })}
                    name="name"
                    type="text"
                  />
                  {errors.name && (
                    <p className="help is-danger">{errors.name.message}</p>
                  )}
                </div>
              </div>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column size={3}>
              <div className="field">
                <Form.Label>Role</Form.Label>
                <div className="control">
                  <div
                    className={`${errors.role && 'is-danger'} ${watch() &&
                      !!watch().role === 'select role' &&
                      !errors.role &&
                      'is-success'} select is-medium`}
                  >
                    <select
                      ref={register({
                        required: true,
                        validate: value => value !== 'select role',
                      })}
                      name="role"
                    >
                      <option>select role</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>
                  {errors.role && errors.role.type === 'validate' && (
                    <p className="help is-danger">Select a role</p>
                  )}
                </div>
              </div>
            </Columns.Column>
            <Columns.Column size={3}>
              <div className="field">
                <Form.Label>Active</Form.Label>
                <div className="control">
                  <div
                    className={`${errors.active && 'is-danger'} ${watch() &&
                      !!watch().active &&
                      !errors.active &&
                      'is-success'} select is-medium`}
                  >
                    <select
                      ref={register({
                        required: 'This field is required',
                      })}
                      name="active"
                    >
                      <option value={0}>No</option>
                      <option value={1}>Yes</option>
                    </select>
                  </div>
                  {errors.active && (
                    <p className="help is-danger">{errors.active.message}</p>
                  )}
                </div>
              </div>
            </Columns.Column>
          </Columns>
          <hr />
          <div className="field">
            <div className="field-label is-normal">
              <div className="field-body">
                <div className="field">
                  <div className="field is-grouped">
                    <div className="control">
                      <button type="submit" className="button is-primary">
                        {location.state ? (
                          <>
                            <Icon>
                              <FontAwesomeIcon icon={faEdit} />
                            </Icon>
                            <span>Edit</span>
                          </>
                        ) : (
                          <>
                            <Icon>
                              <FontAwesomeIcon icon={faSave} />
                            </Icon>
                            <span>Save</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Content>
      </div>
    </form>
  );
};

User.propTypes = {
  createUser: t.func.isRequired,
  updateUser: t.func.isRequired,
  users: t.shape({
    error: t.bool,
    isSaving: t.bool,
    data: t.any,
  }).isRequired,
  location: t.shape({
    state: t.shape({
      email: t.string,
      name: t.string,
      role: t.string,
      active: t.number,
    }),
  }).isRequired,
};

const mapStateToProps = ({ users, router }) => ({
  pathname: router,
  users,
});

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(ActionsCreators.createUserRequest(user)),
  updateUser: user => dispatch(ActionsCreators.updateUserRequest(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

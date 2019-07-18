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
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
import useForm from 'react-hook-form';
import ActionsCreators from '~/redux/actionsCreators';

const Run = ({ createRun, runs, location, updateRun }) => {
  const { handleSubmit, register, errors, setValue, watch } = useForm({
    defaultValues: {
      friendly_name: location.state ? location.state.friendly_name : '',
      distance: location.state ? location.state.distance : '',
    },
  });
  const [showMessage, setShowMessage] = React.useState(false);
  const [errorsCreated, setErrosCreated] = React.useState(null);
  const [errorsDuration, setErrosDistance] = React.useState(null);

  React.useEffect(() => {
    register({ name: 'created' });
    register({ name: 'duration' });
  }, [register]);

  // eslint-disable-next-line consistent-return
  const onSubmit = (values, e) => {
    if (location.state) {
      if (!values.duration && !location.state.duration)
        return setErrosDistance('This field is required');
      if (!values.created && !location.state.created)
        return setErrosCreated('This field is required');
      const duration = values.duration || location.state.duration;
      const created = values.created || location.state.created;
      updateRun({ ...location.state, ...values, duration, created });
      setShowMessage(true);
    } else {
      if (!values.duration) return setErrosDistance('This field is required');
      if (!values.created) return setErrosCreated('This field is required');
      createRun(values);
      e.target.reset();
      setValue('duration', null);
      setValue('created', null);
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
                <FontAwesomeIcon icon={faRunning} />
              </Icon>
              {location.state ? 'Edit details run' : 'Add details run'}
            </Card.Header.Icon>
          </Card.Header.Title>
        </header>
        {showMessage && (
          <Notification color={!runs.error ? 'success' : 'danger'}>
            <Level renderAs="nav">
              <Level.Side align="left">
                <Level.Item>
                  <Heading size={5} subtitle>
                    {!runs.error ? (
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
            <Columns.Column size="two-thirds">
              <div className="field">
                <Form.Label>Friendly Name</Form.Label>
                <div className="control">
                  <input
                    className={`${errors.friendly_name &&
                      'is-danger'} ${watch() &&
                      !!watch().friendly_name &&
                      !errors.friendly_name &&
                      'is-success'} input is-medium`}
                    ref={register({
                      required: 'This field is required',
                      minLength: {
                        value: 5,
                        message: 'Your input required 5 characters',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Your input exceed maxLength',
                      },
                    })}
                    name="friendly_name"
                    type="text"
                  />
                  {errors.friendly_name && (
                    <p className="help is-danger">
                      {errors.friendly_name.message}
                    </p>
                  )}
                </div>
              </div>
            </Columns.Column>
            <Columns.Column>
              <div className="field">
                <Form.Label>Duration</Form.Label>
                <div className="control">
                  <Flatpickr
                    className={`${errorsDuration && 'is-danger'} ${watch() &&
                      !!watch().duration &&
                      !errorsDuration &&
                      'is-success'} input is-medium`}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H\\h:i\\m',
                      time_24hr: true,
                    }}
                    defaultValue={location.state ? location.state.duration : ''}
                    onChange={val => {
                      setErrosDistance(null);
                      setValue('duration', moment(val[0]).format('HH:mm'));
                    }}
                  />
                  {errorsDuration && (
                    <p className="help is-danger">{errorsDuration}</p>
                  )}
                </div>
              </div>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column size={4}>
              <div className="field">
                <Form.Label>
                  Distance <b>(km)</b>
                </Form.Label>
                <div className="control">
                  <input
                    className={`${errors.distance && 'is-danger'} ${watch() &&
                      !!watch().distance &&
                      !errors.distance &&
                      'is-success'} input is-medium`}
                    ref={register({
                      required: 'This field is required ex: 9.99',
                      pattern: /^[\d.]+$/,
                    })}
                    name="distance"
                    type="text"
                  />
                  {errors.distance && (
                    <p className="help is-danger">{errors.distance.message}</p>
                  )}
                </div>
              </div>
            </Columns.Column>
            <Columns.Column size={3}>
              <div className="field">
                <Form.Label>Created</Form.Label>
                <div className="control">
                  <Flatpickr
                    className={`${errorsCreated && 'is-danger'} ${watch() &&
                      !!watch().created &&
                      !errorsCreated &&
                      'is-success'} input is-medium`}
                    options={{
                      enableTime: true,
                      time_24hr: true,
                      dateFormat: 'F, d Y H:i',
                      maxDate: 'today',
                    }}
                    defaultValue={
                      location.state
                        ? new Date(location.state.created).toISOString()
                        : ''
                    }
                    onChange={val => {
                      setErrosCreated(null);
                      setValue('created', val[0]);
                    }}
                  />
                  {errorsCreated && (
                    <p className="help is-danger">{errorsCreated}</p>
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
                      <button
                        type="submit"
                        className={`button is-primary ${runs.isSaving &&
                          'is-loading'}`}
                      >
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

Run.propTypes = {
  createRun: t.func.isRequired,
  updateRun: t.func.isRequired,
  runs: t.shape({
    error: t.bool,
    isSaving: t.bool,
  }).isRequired,
  location: t.shape({
    state: t.shape({
      duration: t.string,
      friendly_name: t.string,
      distance: t.number,
      created: t.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ runs, router }) => ({
  pathname: router,
  runs,
});

const mapDispatchToProps = dispatch => ({
  createRun: run => dispatch(ActionsCreators.createRunRequest(run)),
  updateRun: run => dispatch(ActionsCreators.updateRunRequest(run)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Run);

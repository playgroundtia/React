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
  Loader,
} from 'react-bulma-components';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faSave } from '@fortawesome/free-solid-svg-icons';
import useForm from 'react-hook-form';
import ActionsCreators from '~/redux/actionsCreators';

const Run = ({ createRun, runs }) => {
  const { handleSubmit, register, errors, setValue, watch } = useForm();
  const [showMessage, setShowMessage] = React.useState(false);
  const [errorsCreated, setErrosCreated] = React.useState(null);
  const [errorsDuration, setErrosDistance] = React.useState(null);

  React.useEffect(() => {
    register({ name: 'created' });
    register({ name: 'duration' });
  }, [register]);

  // eslint-disable-next-line consistent-return
  const onSubmit = (values, e) => {
    if (!values.duration) return setErrosDistance('This field is required');
    if (!values.created) return setErrosCreated('This field is required');
    setShowMessage(true);
    createRun(values);
    e.target.reset();
    setValue('duration', null);
    setValue('created', null);
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
              Details run
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
                      <strong> Saved successfully </strong>
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
                      defaultHour: 0,
                      defaultMinute: 0,
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H\\h:i\\m',
                      time_24hr: true,
                    }}
                    onChange={val => {
                      setErrosCreated(null);
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
                      <button type="submit" className="button is-primary">
                        {runs.isSaving ? (
                          <Loader />
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
  runs: t.shape({
    error: t.bool,
    isSaving: t.bool,
  }).isRequired,
};

const mapStateToProps = ({ runs }) => ({
  runs,
});

const mapDispatchToProps = dispatch => ({
  createRun: run => dispatch(ActionsCreators.createRunRequest(run)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Run);

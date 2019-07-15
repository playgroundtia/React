import React from 'react';
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
import { faRunning, faSave } from '@fortawesome/free-solid-svg-icons';
import useForm from 'react-hook-form';

export default function Run() {
  const { handleSubmit, register, errors } = useForm();
  const [showMessage, setShowMessage] = React.useState(false);
  const onSubmit = values => {
    setShowMessage(true);
  };

  return (
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
        <Notification color="success">
          <Level renderAs="nav">
            <Level.Side align="left">
              <Level.Item>
                <Heading size={5} subtitle>
                  <strong> Saved successfully</strong>
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
                  className="input"
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
                <input
                  ref={register({
                    required: 'This field is required',
                  })}
                  name="duration"
                  className="input"
                  type="text"
                />
                {errors.duration && (
                  <p className="help is-danger">{errors.duration.message}</p>
                )}
              </div>
            </div>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column size={4}>
            <div className="field">
              <Form.Label>Distance</Form.Label>
              <div className="control">
                <input
                  ref={register({
                    required: 'This field is required',
                  })}
                  name="distance"
                  className="input"
                  type="text"
                />
                {errors.distance && (
                  <p className="help is-danger">{errors.distance.message}</p>
                )}
              </div>
            </div>
          </Columns.Column>
          <Columns.Column size={4}>
            <div className="field">
              <Form.Label>Created</Form.Label>
              <div className="control">
                <input
                  ref={register({
                    required: 'This field is required',
                  })}
                  name="created"
                  className="input"
                  type="text"
                />
                {errors.created && (
                  <p className="help is-danger">{errors.created.message}</p>
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
                      className="button is-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      <Icon>
                        <FontAwesomeIcon icon={faSave} />
                      </Icon>
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Content>
    </div>
  );
}

import React from 'react';
import { Card, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

export default function Run() {
  return (
    <div className="card-no-box-shadow">
      <Card.Header>
        <Card.Header.Title>
          <Card.Header.Icon>
            <Icon>
              <FontAwesomeIcon icon={faRunning} />
            </Icon>
            Details run
          </Card.Header.Icon>
        </Card.Header.Title>
      </Card.Header>
    </div>
  );
}

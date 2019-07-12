import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import ReactTable from 'react-table';
import ActionsCreators from '../../../../redux/actionsCreators';

const Historic = ({ getRuns }) => {
  React.useEffect(() => {
    getRuns();
  }, [getRuns]);

  const data = [
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 2,
      friend: {
        name: 'Jason Maurer',
        age: 3,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
    {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      },
    },
  ];

  const columns = [
    {
      Header: 'Name',
      accessor: 'name', // String-based value accessors!
    },
    {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name, // Custom value accessors!
    },
    {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age',
    },
  ];
  return (
    <div className="card is-card-table has-pagination has-table-borderless has-bottom-left-hidden">
      <Card.Header>
        <p className="card-header-title">
          <Icon>
            <FontAwesomeIcon icon={faRunning} />
          </Icon>
          <span>Runs</span>
        </p>
      </Card.Header>
      <Card.Content>
        <ReactTable data={data} columns={columns} minRows={5} />
      </Card.Content>
    </div>
  );
};

const mapStateToProps = ({ runs }) => ({
  runs,
});

const mapDispatchToProps = dispatch => ({
  getRuns: () => dispatch(ActionsCreators.getRunsRequest()),
});

Historic.propTypes = {
  getRuns: t.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Historic);

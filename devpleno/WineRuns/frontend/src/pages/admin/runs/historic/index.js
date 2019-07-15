import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import ReactTable from 'react-table';
import ActionsCreators from '../../../../redux/actionsCreators';

const Historic = ({ getRuns, runs }) => {
  React.useEffect(() => {
    getRuns();
  }, [getRuns]);

  // console.log(runs);

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
      Header: 'Friendly Name',
      accessor: 'friendly_name', // String-based value accessors!
    },
    {
      Header: 'Duration',
      accessor: 'duration',
      Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: 'Distance',
      accessor: 'distance',
      Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: 'Created',
      accessor: 'created',
      Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
    },
    // {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: d => d.friend.name, // Custom value accessors!
    // },
    // {
    //   Header: props => <span>Friend Age</span>, // Custom header components!
    //   accessor: 'friend.age',
    // },
  ];
  return (
    <div className="card-no-box-shadow">
      <div className="card-header-no-box-shadow">
        <p className="card-header-title">
          <Icon>
            <FontAwesomeIcon icon={faRunning} />
          </Icon>
          <span>Runs</span>
        </p>
      </div>
      <Card.Content>
        <ReactTable
          noDataText="No runs found"
          showPageSizeOptions={false}
          defaultPageSize={5}
          data={[]}
          columns={columns}
        />
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

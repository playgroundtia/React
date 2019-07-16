import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRunning,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import ReactTable from 'react-table';
import ActionsCreators from '~/redux/actionsCreators';

const Historic = ({ getRuns, runs }) => {
  React.useEffect(() => {
    getRuns();
  }, [getRuns]);

  const columns = [
    {
      Header: 'Friendly Name',
      accessor: 'friendly_name',
    },
    {
      Header: 'Duration',
      accessor: 'duration',
      Cell: data => (
        <div className="has-text-centered">
          <span>{data.value}</span>
        </div>
      ),
    },
    {
      Header: 'Distance',
      accessor: 'distance',
      Cell: data => (
        <div className="has-text-centered">
          <span>{data.value}m</span>
        </div>
      ),
    },
    {
      Header: 'Created',
      accessor: 'created',
      Cell: data => (
        <div className="has-text-centered">
          <span>{moment.utc(data.value).format('DD/MM/YYYY h:mm:ss')}</span>
        </div>
      ),
    },
    {
      Header: '',
      Cell: data => (
        <div className="has-text-">
          <button
            className="button is-primary is-small"
            onClick={() => console.log(data.original)}
          >
            {/* <span>Edit</span> */}
            <Icon>
              <FontAwesomeIcon icon={faEdit} />
            </Icon>
          </button>
          <button className="button is-danger is-small">
            {/* <span>Delete</span> */}
            <Icon>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Icon>
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="card-no-box-shadow">
      <header className="card-header">
        <p className="card-header-title">
          <Icon>
            <FontAwesomeIcon icon={faRunning} />
          </Icon>
          <span>Runs</span>
        </p>
      </header>
      <Card.Content>
        <ReactTable
          className="-striped -highlight"
          noDataText="No runs found"
          showPageSizeOptions={false}
          defaultPageSize={5}
          data={runs.data}
          columns={columns}
        />
      </Card.Content>
    </div>
  );
};

Historic.propTypes = {
  getRuns: t.func.isRequired,
  data: t.shape({
    value: t.string,
  }).isRequired,
  runs: t.shape({
    data: t.array,
  }).isRequired,
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

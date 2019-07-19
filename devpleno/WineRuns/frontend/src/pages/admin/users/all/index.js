import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Card, Icon, Modal, Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRunning,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import ReactTable from 'react-table';
import ActionsCreators from '~/redux/actionsCreators';

const All = ({ getRuns, runs, deleteRun }) => {
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [objDelete, setObjDelete] = React.useState({});
  React.useEffect(() => {
    getRuns();
  }, [getRuns]);

  const columns = [
    {
      Header: '',
      width: 60,
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
      Cell: data => (
        <div className="has-text-centered">
          <span>{data.value}</span>
        </div>
      ),
    },
    {
      Header: 'Role',
      accessor: 'role',
      Cell: data => (
        <div className="has-text-centered">
          <span>{data.value}m</span>
        </div>
      ),
    },
    {
      Header: 'Active',
      accessor: 'active',
      Cell: data => (
        <div className="has-text-centered">
          <span>{moment.utc(data.value).format('DD/MM/YYYY')}</span>
        </div>
      ),
    },
    {
      Header: '',
      width: 80,
      Cell: data => (
        <div className="has-text-centered">
          <NavLink
            to={{
              pathname: '/admin/runs/run',
              state: { ...data.original },
            }}
            exact
          >
            <Button size="small" color="primary">
              <Icon>
                <FontAwesomeIcon icon={faEdit} />
              </Icon>
            </Button>
          </NavLink>

          <Button
            size="small"
            color="danger"
            onClick={() => {
              setShowModalDelete(!showModalDelete);
              setObjDelete(data.original);
            }}
          >
            <Icon>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Icon>
          </Button>
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
      <Modal
        show={showModalDelete}
        showClose
        onClose={() => setShowModalDelete(!showModalDelete)}
      >
        <div className="modal-background" />
        <div className="modal-content" style={{ overflow: 'hidden' }}>
          <section className="hero is-danger is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Delete</h1>
                <h2 className="subtitle">
                  Want to {objDelete.friendly_name} ?
                </h2>
              </div>
            </div>
            <div className="hero-foot">
              <nav className="tabs">
                <div className="container">
                  <span className="navbar-item">
                    <div className="buttons">
                      <Button
                        color="warning"
                        onClick={() => {
                          deleteRun(objDelete);
                          setShowModalDelete(!showModalDelete);
                        }}
                      >
                        <span>Yes, delete!</span>
                      </Button>
                      <Button
                        onClick={() => setShowModalDelete(!showModalDelete)}
                      >
                        <span>No!</span>
                      </Button>
                    </div>
                  </span>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

All.propTypes = {
  getRuns: t.func.isRequired,
  deleteRun: t.func.isRequired,
  data: t.shape({
    value: t.string,
  }).isRequired,
  runs: t.shape({
    data: t.array,
    deleted: t.bool,
  }).isRequired,
};

const mapStateToProps = ({ runs }) => ({
  runs,
});

const mapDispatchToProps = dispatch => ({
  getRuns: () => dispatch(ActionsCreators.getRunsRequest()),
  deleteRun: run => dispatch(ActionsCreators.deleteRunRequest(run)),
});

All.propTypes = {
  getRuns: t.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);

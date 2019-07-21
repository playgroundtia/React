import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Icon, Modal, Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faUsers,
  faUserCircle,
  faUserTie,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import ReactTable from 'react-table';
import ActionsCreators from '~/redux/actionsCreators';

const All = ({ getUsers, deleteUser, users }) => {
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [objDelete, setObjDelete] = React.useState({});
  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

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
          <Icon color="dark">
            {data.value === 'admin' && <FontAwesomeIcon icon={faUserTie} />}
            {data.value === 'user' && <FontAwesomeIcon icon={faUserCircle} />}
            {data.value === 'teacher' && (
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            )}
          </Icon>
        </div>
      ),
    },
    {
      Header: 'Active',
      accessor: 'active',
      width: 120,
      Cell: data => (
        <div className="has-text-centered">
          <span
            className={`tag is-link ${data.value ? 'is-success' : 'is-danger'}`}
          >
            {data.value ? 'active' : 'inactive'}
          </span>
        </div>
      ),
    },
    {
      Header: '',
      width: 120,
      Cell: data => (
        <span>
          <div className="has-text-centered">
            <NavLink
              to={{
                pathname: '/admin/users/user',
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
        </span>
      ),
    },
  ];
  return (
    <div className="card-no-box-shadow">
      <header className="card-header">
        <p className="card-header-title">
          <Icon>
            <FontAwesomeIcon icon={faUsers} />
          </Icon>
          <span>Users</span>
        </p>
      </header>
      <Card.Content>
        <ReactTable
          className="-striped -highlight"
          noDataText="No runs found"
          showPageSizeOptions={false}
          defaultPageSize={5}
          data={users.data}
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
                <h2 className="subtitle">Want to User: {objDelete.name} ?</h2>
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
                          deleteUser(objDelete);
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
  getUsers: t.func.isRequired,
  deleteUser: t.func.isRequired,
  data: t.shape({
    value: t.string,
  }).isRequired,
  users: t.shape({
    data: t.array,
  }).isRequired,
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(ActionsCreators.getUsersRequest()),
  deleteUser: user => dispatch(ActionsCreators.deleteUserRequest(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);

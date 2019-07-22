import React from 'react';
import t from 'prop-types';
import {
  Box,
  Tile,
  Heading,
  Image,
  Section,
  Level,
  Button,
} from 'react-bulma-components';
import { connect } from 'react-redux';
import ActionsCreators from '~/redux/actionsCreators';

const Dashboard = ({ runs, auth, users, getUsers }) => {
  React.useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <Section className="is-title-bar">
        <Level renderAs="nav">
          <Level.Side align="left">
            <Level.Item>
              <ul>
                <li>Admin /</li>
                <li>Dashboard</li>
              </ul>
            </Level.Item>
          </Level.Side>
        </Level>
      </Section>
      <Section>
        <Box>
          <Tile kind="ancestor">
            <Tile size={7} vertical>
              <Tile>
                <Tile kind="parent" vertical>
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="primary"
                  >
                    {auth.user.role === 'admin' && (
                      <>
                        <Heading size={1}>{users.data.length}</Heading>
                        <Heading subtitle size={3}>
                          {users.data.length > 1 ? 'Users' : 'User'}
                        </Heading>
                      </>
                    )}
                    {auth.user.role === 'user' && auth.user.teacher ? (
                      <>
                        <Heading size={1}>{runs.data.length}</Heading>
                        <Heading subtitle size={3}>
                          {runs.data.length > 1 ? 'Runs' : 'Run'}
                        </Heading>
                      </>
                    ) : (
                      <>
                        <Heading>No Teacher!</Heading>
                        <Heading subtitle>
                          <Button>
                            <span>Add teacher!</span>
                          </Button>
                        </Heading>
                      </>
                    )}
                  </Tile>
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="warning"
                  >
                    {auth.user.role === 'user' && auth.user.profile ? (
                      <>
                        <Heading size={1}>{runs.data.length}</Heading>
                        <Heading subtitle size={3}>
                          {runs.data.length > 1 ? 'Runs' : 'Run'}
                        </Heading>
                      </>
                    ) : (
                      <>
                        <Heading>Edit Profile!</Heading>
                        <Heading subtitle>
                          <Button>
                            <span>edit</span>
                          </Button>
                        </Heading>
                      </>
                    )}
                  </Tile>
                </Tile>
                <Tile kind="parent">
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="info"
                  >
                    <Heading>Picture of the day.</Heading>
                    <Heading subtitle>Users {auth.user.name}.</Heading>
                    <Image
                      size="4by3"
                      src="http://bulma.io/images/placeholders/640x480.png"
                    />
                  </Tile>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile
                  renderAs="article"
                  kind="child"
                  notification
                  color="danger"
                >
                  <Heading>Wide tile</Heading>
                  <Heading subtitle>Aligned with the right tile</Heading>
                  <div className="content" />
                </Tile>
              </Tile>
            </Tile>

            <Tile kind="parent">
              <Tile
                renderAs="article"
                kind="child"
                notification
                color="success"
              >
                <div className="content">
                  <Heading>Calendar</Heading>
                  <Heading subtitle size={5} renderAs="h2">
                    No event for the day..
                  </Heading>
                  <div className="content" />
                </div>
              </Tile>
            </Tile>
          </Tile>
        </Box>
      </Section>
    </>
  );
};

Dashboard.propTypes = {
  getUsers: t.func.isRequired,
  runs: t.shape({
    data: t.array,
  }).isRequired,
  users: t.shape({
    data: t.array,
  }).isRequired,
  auth: t.shape({
    user: t.shape({
      name: t.string,
      role: t.string,
      teacher: t.shape({}),
      profile: t.shape({}),
    }),
  }).isRequired,
};

const mapStateToProps = ({ runs, auth, users }) => ({
  runs,
  auth,
  users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(ActionsCreators.getUsersRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

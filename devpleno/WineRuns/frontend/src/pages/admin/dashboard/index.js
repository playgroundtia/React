import React from 'react';
import t from 'prop-types';
import {
  Box,
  Tile,
  Heading,
  Image,
  Section,
  Level,
} from 'react-bulma-components';
import { connect } from 'react-redux';

const Dashboard = ({ runs, auth }) => {
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
                    <Heading size={1}>{runs.data.length}</Heading>
                    <Heading subtitle size={3}>
                      {runs.data.length > 1 ? 'Runs' : 'Run'}
                    </Heading>
                  </Tile>
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="warning"
                  >
                    <Heading>Tiles...</Heading>
                    <Heading subtitle>Bottom Tile...</Heading>
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
  runs: t.shape({
    data: t.array,
  }).isRequired,
  auth: t.shape({
    user: t.shape({
      name: t.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ runs, auth }) => ({
  runs,
  auth,
});

export default connect(mapStateToProps)(Dashboard);

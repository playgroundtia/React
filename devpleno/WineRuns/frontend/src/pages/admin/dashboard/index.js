import React from 'react';
import {
  Box,
  Tile,
  Heading,
  Image,
  Section,
  Level,
} from 'react-bulma-components';

export default function dashboard() {
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
                    <Heading size={1}>10</Heading>
                    <Heading subtitle size={3}>
                      Users
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
                    <Heading subtitle>Users Tiago Neves.</Heading>
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
}

import React from 'react';
import { Container, Section } from 'react-bulma-components';
import Header from '../../components/Header';

export default function home() {
  return (
    <Section>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </Section>
  );
}

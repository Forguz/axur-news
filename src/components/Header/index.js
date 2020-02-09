import React from 'react';

import { Container, Title, SearchBar } from './styles';

export default function components() {
  return (
    <Container>
      <Title to="/">Axur News</Title>
      <SearchBar placeholder="Filter by author." />
    </Container>
  );
}

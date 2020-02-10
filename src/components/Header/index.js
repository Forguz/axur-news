import React from 'react';

import { Container, Title } from './styles';
import history from '../../services/history';

export default function Header() {
  function handleTitleClick() {
    history.push('/');
  }

  return (
    <Container>
      <Title onClick={() => handleTitleClick()}>Axur News.</Title>
    </Container>
  );
}

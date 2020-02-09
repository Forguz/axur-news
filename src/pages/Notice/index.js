import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import history from '../../services/history';

export default function Notice() {
  const [notice, setNotice] = useState({});

  useEffect(() => {
    setNotice(history.location.state);
  }, []);

  return notice && (notice.length || Object.keys(notice).length) ? (
    <Container padding={20}>
      <span>{notice.metadata.dateFormatted}</span>
      <h1>{notice.title}</h1>
      <h2>{notice.author}</h2>
      <p>{notice.body}</p>
    </Container>
  ) : (
    <Container>
      <h1>Ops, parece que você não selecionou nenhuma notice</h1>
    </Container>
  );
}

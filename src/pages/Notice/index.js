import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import Container from '../../components/Container';
import history from '../../services/history';
import { BackToHome } from './styles';

export default function Notice() {
  const [notice, setNotice] = useState({});

  function handleBackToHome() {
    history.goBack();
  }

  useEffect(() => {
    setNotice(history.location.state);
  }, []);

  return notice && (notice.length || Object.keys(notice).length) ? (
    <Container padding={20}>
      <span>{notice.metadata.dateFormatted}</span>
      <h1>{notice.title}</h1>
      <h2>{notice.author}</h2>
      <p>{notice.body}</p>
      <div>
        <BackToHome onClick={() => handleBackToHome()}>
          <FaArrowLeft size={16} />
        </BackToHome>
      </div>
    </Container>
  ) : (
    <Container>
      <h1>Ops, parece que você não selecionou nenhuma notice</h1>
    </Container>
  );
}

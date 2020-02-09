import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toDate, format } from 'date-fns';

import Container from '../../components/Container';
import { NewsList, LoadSpinner } from './styles';
import api from '../../services/api';

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAutorName(noticia, autores) {
    if (autores && autores.length !== 0) {
      const autorObj = autores.find(
        autor => autor.id === noticia.metadata.authorId
      );
      return autorObj.name;
    }
    return null;
  }

  useEffect(() => {
    async function getNoticias() {
      const noticiasResponse = await api.get('/5be5e3fa2f000082000fc3f8');
      const autoresResponse = await api.get('/5be5e3ae2f00005b000fc3f6');

      noticiasResponse.data.forEach(noticia => {
        const dataFormatada = format(
          toDate(noticia.metadata.publishedAt),
          'PPpp'
        );
        noticia.autor = getAutorName(noticia, autoresResponse.data);
        noticia.metadata.dataFormatada = dataFormatada;
        return noticia;
      });
      setNoticias(noticiasResponse.data);
      setLoading(false);
    }
    getNoticias();
  }, []);

  return (
    <Container>
      <NewsList>
        {loading ? (
          <LoadSpinner>
            <FaSpinner size={48} />
            <span>Carregando notícias</span>
          </LoadSpinner>
        ) : (
          noticias.map(noticia => (
            <li key={noticia.title}>
              <span>{noticia.metadata.dataFormatada}</span>
              <h1>{noticia.title}</h1>
              <h2>{noticia.autor}</h2>
            </li>
          ))
        )}
      </NewsList>
    </Container>
  );
}

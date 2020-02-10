import React, { useState, useEffect } from 'react';
import { FaSpinner, FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { toDate, format } from 'date-fns';

import Container from '../../components/Container';
import { NoticesList, LoadSpinner, SearchBar, OrderButton } from './styles';
import history from '../../services/history';
import api from '../../services/api';

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [orderByDate, setOrderByDate] = useState(0);
  const [orderIcon, setOrderIcon] = useState(<FaSort />);
  const [authorFilter, setAuthorFilter] = useState('');
  const [loading, setLoading] = useState(true);

  function getAutorName(notice, autores) {
    if (autores && autores.length !== 0) {
      const autorObj = autores.find(
        autor => autor.id === notice.metadata.authorId
      );
      return autorObj.name;
    }
    return null;
  }

  function openNoticia(notice) {
    history.push('/notice', notice);
  }

  function handleFilterChange(e) {
    setAuthorFilter(e.target.value);
  }

  function handleOrderByDate() {
    setOrderByDate(orderByDate + 1);
  }

  function showNotices(noticesParam) {
    if (authorFilter) {
      noticesParam.filter(notice =>
        notice.author.toLowerCase().includes(authorFilter.toLowerCase())
      );
    }

    switch (orderByDate) {
      case 1:
        noticesParam.sort(
          (x, y) => y.metadata.publishedAt - x.metadata.publishedAt
        );
        break;
      case 2:
        noticesParam.sort(
          (x, y) => x.metadata.publishedAt - y.metadata.publishedAt
        );
        break;
      default:
        noticesParam.sort();
        break;
    }
    return noticesParam.map(notice => (
      <li
        data-test-id="notice-list"
        key={notice.title}
        onClick={() => openNoticia(notice)}
        role="presentation"
      >
        <span>{notice.metadata.dateFormatted}</span>
        <h1>{notice.title}</h1>
        <h2>{notice.author}</h2>
      </li>
    ));
  }

  useEffect(() => {
    async function getNotices() {
      const noticesResponse = await api.get('/5be5e3fa2f000082000fc3f8');
      const autoresResponse = await api.get('/5be5e3ae2f00005b000fc3f6');

      noticesResponse.data.forEach(notice => {
        const dateFormatted = format(
          toDate(notice.metadata.publishedAt),
          'PPpp'
        );
        notice.author = getAutorName(notice, autoresResponse.data);
        notice.metadata.dateFormatted = dateFormatted;
        return notice;
      });
      setNotices(noticesResponse.data);
      localStorage.setItem('notices', JSON.stringify(noticesResponse.data));
      setLoading(false);
    }
    const noticesLocalStorage = localStorage.getItem('notices') || '';

    if (noticesLocalStorage) {
      setNotices(JSON.parse(noticesLocalStorage));
      setLoading(false);
    } else {
      getNotices();
    }
  }, []);

  useEffect(() => {
    setFilteredNotices(
      notices.filter(notice =>
        notice.author.toLowerCase().includes(authorFilter.toLowerCase())
      )
    );
  }, [authorFilter]);

  useEffect(() => {
    switch (orderByDate) {
      case 1:
        setOrderIcon(<FaSortDown size={16} />);
        break;
      case 2:
        setOrderIcon(<FaSortUp size={16} />);
        break;
      default:
        setOrderByDate(0);
        setOrderIcon(<FaSort size={16} />);
        break;
    }
  }, [orderByDate]);

  let renderNotices;

  if (authorFilter) {
    renderNotices = showNotices(filteredNotices);
  } else {
    renderNotices = showNotices(notices);
  }

  return (
    <Container>
      <NoticesList>
        <div>
          <SearchBar
            placeholder="Filter by author"
            onChange={e => handleFilterChange(e)}
          />
          <OrderButton type="button" onClick={() => handleOrderByDate()}>
            Order by date
            {orderIcon}
          </OrderButton>
        </div>
        {loading ? (
          <LoadSpinner>
            <FaSpinner size={48} />
            <span>Carregando notícias</span>
          </LoadSpinner>
        ) : (
          renderNotices
        )}
      </NoticesList>
    </Container>
  );
}

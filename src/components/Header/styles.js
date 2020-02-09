import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Procurar from '../../assets/images/procurar.png';

export const Container = styled.header`
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #d8d8d8;
    }
  }
`;

export const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  font: 26px Roboto, sans-serif;
  margin: 10px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchBar = styled.input`
  background-color: #7159c1;
  background-image: url(${Procurar});
  background-position: 95% 10px;
  background-size: 20px;
  background-repeat: no-repeat;
  border: 1px solid #fff;
  padding-right: 20px;
  color: white;
  font-size: 18px;
  padding: 10px 45px 10px 10px;

  &::placeholder {
    color: white;
  }
`;

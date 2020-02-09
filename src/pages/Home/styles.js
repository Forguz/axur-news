import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import Procurar from '../../assets/images/procurar.png';

const loadAnimation = keyframes`
  to {transform: rotate(360deg)}
`;

export const LoadSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;

  svg {
    color: #7159c1;
    animation: ${loadAnimation} 1.5s linear infinite;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
  }
`;

export const SearchBar = styled.input`
  background-color: transparent;
  background-image: url(${Procurar});
  background-position: 93% 10px;
  background-size: 20px;
  background-repeat: no-repeat;
  border: 1px solid #7159c1;
  padding-right: 20px;
  color: #7159c1;
  font-size: 18px;
  padding: 10px 40px 10px 10px;
  margin-right: 10px;
  max-width: 200px;

  &::placeholder {
    color: #7159c1;
  }
`;

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7159c1;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 5px;
  outline: none;
  &:active {
    background: ${darken(0.1, '#7159c1')};
  }
`;

export const NoticesList = styled.ul`
  list-style: none;

  div {
    display: flex;
    justify-content: space-between;
  }

  li {
    padding: 15px 10px;
    cursor: pointer;

    &:hover h1 {
      text-decoration: underline;
    }

    h1 {
      margin-top: 5px;
      color: #7159c1;
      margin-bottom: 5px;
    }

    span {
      color: #191920;
    }

    & + li {
      border-top: 1px solid #ddd;
      margin-top: 10px;
    }

    p {
      margin-top: 5px;
      font-size: 18px;
      line-height: 1.5;
      text-align: justify;
      text-justify: newspaper;
    }
  }
`;

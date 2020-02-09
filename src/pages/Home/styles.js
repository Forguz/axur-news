import styled, { keyframes } from 'styled-components';

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

export const NewsList = styled.ul`
  list-style: none;

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
      margin-left: 0;
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../styles/device';

export const Container = styled.header`
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    input {
      margin-left: 10px;
    }
  }
`;

export const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  font: 26px Roboto, sans-serif;
  margin: 10px;
  letter-spacing: 0.15em;
  white-space: nowrap;
  padding-right: 2px;
  font-weight: bold;
  transition: 0.1s;

  &:hover {
    text-decoration: underline;
  }
`;

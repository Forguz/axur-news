import styled from 'styled-components';
import { darken } from 'polished';

export const BackToHome = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  background-color: #7159c1;
  color: #fff;
  border-radius: 4px;
  height: 40px;
  width: 110px;
  margin-top: 20px;
  &:active {
    background: ${darken(0.1, '#7159c1')};
  }
`;

import styled from 'styled-components';

const container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 0 20px rgba(76, 74, 82, 0.6);
  flex-direction: column;
  padding: ${props => props.padding || 10}px;
  h1 {
    margin-top: 5px;
    color: #7159c1;
    margin-bottom: 5px;
  }
  span {
    color: #191920;
  }
  p {
    margin-top: 5px;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    text-justify: newspaper;
    & + div {
      margin-top: 20px;
      border-top: solid 1px #ddd;
    }
  }
`;

export default container;

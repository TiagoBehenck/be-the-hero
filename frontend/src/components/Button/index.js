import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 60px;
  color: ${(props) => props.theme.colors.tertiary};
  background: ${(props) => props.theme.colors.secundary};
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

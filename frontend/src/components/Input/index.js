import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid ${(props) => props.theme.colors.quaternary};
  border-radius: 8px;
  padding: 0 24px;
`;

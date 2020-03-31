import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${(props) => props.theme.colors.textStrong};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  > svg {
    margin-right: 8px;
  }

  :hover {
    opacity: 0.8s;
  }
`;

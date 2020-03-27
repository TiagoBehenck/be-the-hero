import styled from 'styled-components';
import { colors } from '~/styles/colors';

export default styled.button`
  width: 100%;
  height: 60px;
  color: #fff;
  background: ${colors.danger};
  border: 1px solid #dcdce6;
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

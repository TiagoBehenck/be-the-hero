import styled from 'styled-components';

import Link from '~/components/Link';
import { colors } from '~/styles/colors';
import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  > h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  > img {
    height: 64px;
  }

  > span {
    font-size: 20px;
    margin-left: 24px;
  }
`;

export const NewIncidents = styled(Link)`
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

  width: 260px;
  margin-left: auto;
  margin-top: 0;
`;

export const Logout = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const Item = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  > strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }

  p + strong {
    margin-top: 32px;
  }

  > button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const ActionPage = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonPage = styled(Button)`
  width: 120px;
  border-radius: 4px;

  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: 0;
  border-radius: 8px;

  &:disabled {
    cursor: not-allowed;
    background: #737380;
  }
`;

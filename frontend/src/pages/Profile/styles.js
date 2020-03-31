import styled from 'styled-components';

import Switch from 'react-switch';

import Link from '~/components/Link';
import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  > h1 {
    color: ${(props) => props.theme.colors.title};
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      height: 64px;
    }

    > span {
      color: ${(props) => props.theme.colors.title};
      font-size: 20px;
      margin-left: 24px;
    }

    > section {
      margin-right: 16px;
      display: flex;
    }
  }
`;

export const Toggle = styled(Switch).attrs({
  checkedIcon: false,
  uncheckedIcon: false,
  height: 10,
  width: 40,
  handleDiameter: 20,
  offHandleColor: '#d3d3d3',
  onHandleColor: '#737380',
  offColor: '#333',
  onColor: '#ccc',
})`
  margin: 0 8px;
`;

export const NewIncidents = styled(Link)`
  width: 100%;
  height: 60px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  /* border: 1px solid ${(props) => props.theme.colors.quaternary}; */
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
  border: none;
  /* border: 1px solid ${(props) => props.theme.colors.quaternary}; */
  background: ${(props) => props.theme.colors.background};
  margin-left: 16px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const Item = styled.li`
  background: ${(props) => props.theme.colors.CardBackground};
  padding: 24px;
  border-radius: 8px;
  position: relative;

  > strong {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.textStrong};
  }

  p {
    color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 8px;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors.secundary};
  }
`;

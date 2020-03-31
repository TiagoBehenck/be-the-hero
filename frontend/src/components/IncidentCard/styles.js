import styled from 'styled-components';

export const Container = styled.li`
  background: ${(props) => props.theme.colors.CardBackground};
  padding: 24px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  strong {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.textStrong};
  }

  p + strong {
    margin-top: 32px;
  }
  p {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 21px;
  }
  button.delete {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
    &:hover {
      opacity: ${(props) => props.theme.title === 'light' && 0.8};
    }
    svg {
      &:hover {
        color: ${(props) =>
          props.theme.title === 'dark' && '#e02041'} !important;
      }
    }
  }
  button.edit {
    position: absolute;
    right: 24px;
    bottom: 24px;
    border: 0;
    background: transparent;
    &:hover {
      opacity: ${(props) => props.theme.title === 'light' && 0.8};
    }
    svg {
      &:hover {
        color: ${(props) =>
          props.theme.title === 'dark' && '#e02041'} !important;
      }
    }
  }
`;

import styled from 'styled-components';

import InputMask from 'react-input-mask';

import Link from '~/components/Link';
import InputText from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > section {
    width: 100%;
    max-width: 380px;

    > h1 {
      color: ${(props) => props.theme.colors.title};
      margin: 64px 0 32px;
      font-size: 32px;
    }

    > p {
      font-size: 18px;
      color: ${(props) => props.theme.colors.text};
      line-height: 32px;
    }
  }
`;

export const BackLink = styled(Link)`
  color: ${(props) => props.theme.colors.textStrong};
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled(InputText)`
  margin-top: 8px;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.left}px;
`;

export const InputTelephone = styled(InputMask)`
  margin-top: 8px;
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 8px;
  padding: 0 24px;
`;

export const InputGroup = styled.div`
  display: flex;
`;

export const SubmitButton = styled(Button)``;

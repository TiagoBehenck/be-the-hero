import styled from 'styled-components';

import Button from '~/components/Button';
import InputText from '~/components/Input';
import Link from '~/components/Link';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  > form {
    margin-top: 100px;

    > h1 {
      color: ${(props) => props.theme.colors.title};
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
`;

export const Input = styled(InputText)``;

export const SubmitButton = styled(Button)``;

export const Register = styled(Link)`
  color: ${(props) => props.theme.colors.title};
`;

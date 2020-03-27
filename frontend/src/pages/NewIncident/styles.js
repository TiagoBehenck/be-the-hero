import styled from 'styled-components';

import { colors } from '~/styles/colors';

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
  background: ${colors.primary};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > section {
    width: 100%;
    max-width: 380px;

    > h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    > p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }
`;

export const BackLink = styled(Link)``;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled(InputText)`
  margin-top: 8px;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.left}px;
`;

export const Description = styled.textarea`
  margin-top: 8px;
  width: 100%;
  min-height: 140px;
  resize: vertical;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const CancelButton = styled(Link)`
  width: 100%;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  line-height: 60px;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export const SubmitButton = styled(Button)``;

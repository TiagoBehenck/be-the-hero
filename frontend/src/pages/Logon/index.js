import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import api from '~/services/api';

import { toast } from 'react-toastify';

import { colors } from '~/styles/colors';
import { Container, Content, Input, SubmitButton, Register } from './styles';

import logoImg from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      toast.success(`Bem vindo de volta, ${response.data.name}`);
      history.push('/profile');
    } catch (error) {
      toast.error('Login inválido =(');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <Input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <SubmitButton>Entrar</SubmitButton>
          <Register to="/register">
            <FiLogIn size={16} color={colors.danger} />
            Não tenho cadastro
          </Register>
        </form>
      </Content>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}

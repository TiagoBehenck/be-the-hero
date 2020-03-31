import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { confirmAlert } from 'react-confirm-alert';

import api from '~/services/api';

import logoImg from '~/assets/logo.svg';

import {
  Container,
  Content,
  BackLink,
  Form,
  Input,
  InputTelephone,
  InputGroup,
  SubmitButton,
} from './styles';
import { toast } from 'react-toastify';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    console.log(whatsapp);

    try {
      const response = await api.post('ongs', data);

      confirmAlert({
        title: 'Cadastro criado',
        message: `Seu ID de acesso: ${response.data.id}`,
      });
      toast.success(`Cadastro criado com sucesso!`);
      history.push('/');
    } catch (error) {
      toast.error('Infelizmente não foi possível criar seu cadastro :(');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <BackLink to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </BackLink>
        </section>

        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputTelephone
            placeholder="Whatsapp"
            mask="+55 (99) 99999-9999"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
          <InputGroup>
            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="UF"
              width={80}
              left={5}
              value={uf}
              maxLength={2}
              onChange={(e) => setUf(e.target.value)}
              required
            />
          </InputGroup>
          <SubmitButton>Cadastrar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}

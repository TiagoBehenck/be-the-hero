import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';

import logoImg from '~/assets/logo.svg';

import {
  Container,
  Content,
  BackLink,
  Form,
  Input,
  Description,
  ButtonGroup,
  CancelButton,
  SubmitButton,
} from './styles';
import { toast } from 'react-toastify';

export default function ManagementIncident() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { title, description, value };
    try {
      await api.post('incidents', data, { headers: { Authorization: ongId } });
      toast.success(`Incidente criado com sucesso!`);
      history.push('/profile');
    } catch (error) {
      toast.error(`Erro ao cadastrar o caso, tente novamente.`);
    }
  }

  useEffect(() => {
    async function loadIncident() {
      const { data } = await api.get(`/incidents/${id}`);

      setTitle(data.title);
      setDescription(data.description);
      setValue(data.value);
      console.log(data.title);
    }
    loadIncident();
  }, [id]);

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </BackLink>
        </section>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Description
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <ButtonGroup>
            <CancelButton to="/profile">Cancelar</CancelButton>
            <SubmitButton>Cadastrar</SubmitButton>
          </ButtonGroup>
        </Form>
      </Content>
    </Container>
  );
}

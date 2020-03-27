import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '~/services/api';

import {
  Container,
  Header,
  NewIncidents,
  Logout,
  List,
  Item,
  ActionPage,
  ButtonPage,
} from './styles';

import logoImg from '~/assets/logo.svg';
import { colors } from '~/styles/colors';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const [incidents, setIndcidents] = useState([]);
  const [page, setPage] = useState(1);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api
      .get('profile', {
        params: {
          page,
        },
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIndcidents(response.data);
      });
  }, [ongId, page]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      setIndcidents(incidents.filter((incidents) => incidents.id !== id));
      toast.success(`Incidente ${id} deletado com sucesso!`);
    } catch (error) {
      toast.error('Erro ao deletar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vinda, {ongName}</span>
        <NewIncidents to="/incidents/new">Cadastrar novo caso</NewIncidents>
        <Logout onClick={handleLogout}>
          <FiPower size={18} color={colors.danger} />
        </Logout>
      </Header>
      <h1>Cassos cadastrados</h1>
      <List>
        {incidents.map((incident) => (
          <Item key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </Item>
        ))}
      </List>
      <ActionPage>
        <ButtonPage disabled={page === 1} onClick={() => setPage(page - 1)}>
          Voltar
        </ButtonPage>
        <ButtonPage
          disabled={incidents.length < 6}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </ButtonPage>
      </ActionPage>
    </Container>
  );
}

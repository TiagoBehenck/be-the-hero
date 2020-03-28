import React, { useEffect, useState, useContext } from 'react';
import { FiPower, FiTrash2, FiSun, FiMoon } from 'react-icons/fi';

import api from '~/services/api';

import {
  Container,
  Header,
  Toggle,
  NewIncidents,
  Logout,
  List,
  Item,
  ActionPage,
  ButtonPage,
} from './styles';

import { ThemeContext } from 'styled-components';

import logoImg from '~/assets/logo.svg';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Profile({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

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
        <div>
          <img src={logoImg} alt="Be the Hero" />
          <span>Bem vinda, {ongName}</span>
        </div>
        <div>
          <section>
            <FiSun size={16} color="#b41934" />
            <Toggle onChange={toggleTheme} checked={title === 'dark'} />
            <FiMoon size={16} color="#b41934" />
          </section>
          <NewIncidents to="/incidents/new">Cadastrar novo caso</NewIncidents>
          <Logout onClick={handleLogout}>
            <FiPower size={18} color="#E02041" />
          </Logout>
        </div>
      </Header>
      <h1>Casos cadastrados</h1>
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

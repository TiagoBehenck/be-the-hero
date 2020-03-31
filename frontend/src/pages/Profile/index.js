import React, { useEffect, useState, useContext } from 'react';
import { FiPower, FiSun, FiMoon } from 'react-icons/fi';
import { FaSadCry } from 'react-icons/fa';

import api from '~/services/api';

import { confirmAlert } from 'react-confirm-alert';

import {
  Container,
  Header,
  Toggle,
  NewIncidents,
  Logout,
  List,
  ActionPage,
  ButtonPage,
  Empty,
} from './styles';

import { ThemeContext } from 'styled-components';
import IncidentCard from '~/components/IncidentCard';

import logoImg from '~/assets/logo.svg';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Profile({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  const [incidents, setIncidents] = useState([]);
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
        setIncidents(response.data);
      });
  }, [ongId, page]);

  async function handleDeleteIncident(id) {
    confirmAlert({
      title: 'Confirme a exclusão',
      message: `Deseja remover o caso ${id} ?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            try {
              await api.delete(`incidents/${id}`, {
                headers: {
                  Authorization: ongId,
                },
              });
              toast.success(`Incidente ${id} deletado com sucesso!`);
              setIncidents(incidents.filter((incident) => incident.id !== id));
            } catch (err) {
              toast.error(
                (err.response && err.response.data.error) ||
                  'Erro de comunicação com o servidor'
              );
            }
          },
        },
        {
          label: 'Não',
          onClick: () => '',
        },
      ],
    });
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
      {incidents.length > 0 ? (
        <List>
          {incidents.map((incident) => (
            <IncidentCard
              key={String(incident.id)}
              incident={incident}
              handleDeleteIncident={handleDeleteIncident}
            />
          ))}
        </List>
      ) : (
        <Empty>
          <h1>Você ainda não cadastrou nenhum caso.</h1>
          <FaSadCry color="#737380" size={50} />
        </Empty>
      )}
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

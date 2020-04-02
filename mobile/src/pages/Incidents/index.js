import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from 'styled-components';
import api from '../../services/api';
import Context from '../../themes/context';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  ToggleThemeButton,
  ThemeIcon,
  Right,
  Image,
  Total,
  Bold,
  Welcome,
  Description,
  IncidentList,
  Incident,
  Property,
  Value,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incidents() {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/incidents', { params: { page } });

    setTotal(response.headers['x-total-count']);
    setIncidents([...incidents, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Right>
          <Total>
            Total de <Bold> {total} casos</Bold>
          </Total>
          <ToggleThemeButton onPress={toggleTheme}>
            <ThemeIcon name={title === 'light' ? 'sun' : 'moon'} />
          </ToggleThemeButton>
        </Right>
      </Header>

      <Welcome>Bem vindo!</Welcome>
      <Description>Ecolha um dos casos abaixo e salve o dia</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(item) => String(item.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Incident>
            <Property>ONG:</Property>
            <Value>{item.name}</Value>

            <Property>CASO:</Property>
            <Value>{item.description}</Value>

            <Property>VALOR:</Property>
            <Value>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.value)}
            </Value>

            <DetailsButton
              onPress={() => {
                navigateToDetail(item);
              }}
            >
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}

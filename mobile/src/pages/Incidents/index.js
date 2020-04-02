import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
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
        <Total>
          Total de <Bold> {total} casos</Bold>
        </Total>
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

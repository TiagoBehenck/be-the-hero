import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Total>
          Total de <Bold> 0 casos</Bold>
        </Total>
      </Header>

      <Welcome>Bem vindo!</Welcome>
      <Description>Ecolha um dos casos abaixo e salve o dia</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(incident) => String(incident)}
        renderItem={() => (
          <Incident>
            <Property>ONG:</Property>
            <Value>APAD</Value>

            <Property>CASO:</Property>
            <Value>Cadelinha atropelada</Value>

            <Property>VALOR:</Property>
            <Value>R$ 120,00</Value>

            <DetailsButton onPress={navigateToDetail}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}

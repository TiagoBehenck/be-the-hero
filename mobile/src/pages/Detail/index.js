import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Mailcomposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  Image,
  BackButton,
  Incident,
  Property,
  Value,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  TextAction,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)} reais`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    Mailcomposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <BackButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </BackButton>
      </Header>
      <Incident>
        <Property marginTop>ONG:</Property>
        <Value>
          {incident.name} de {incident.city}/{incident.uf}{' '}
        </Value>

        <Property>CASO:</Property>
        <Value>{incident.description}</Value>

        <Property>VALOR:</Property>
        <Value>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Value>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>
        <Actions>
          <Action onPress={sendWhatsapp}>
            <TextAction>WhatsApp</TextAction>
          </Action>
          <Action onPress={sendMail}>
            <TextAction>E-mail</TextAction>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Image = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Welcome = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;

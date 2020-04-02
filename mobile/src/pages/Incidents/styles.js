import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

Icon.loadFont();

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: column;
  position: relative;
`;

export const Total = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 40px;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;

export const Welcome = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const IncidentList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CardBackground};
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;

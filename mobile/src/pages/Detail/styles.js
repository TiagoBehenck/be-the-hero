import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CardBackground};
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  margin-top: ${(props) => (props.marginTop ? 0 : 24)}px;
`;

export const Value = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textStrong};
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CardBackground};
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const TextAction = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color:  ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title};
  color: #fff;
  font-size: 40px;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color:  ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "android" ? '0' : '60px' };
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`
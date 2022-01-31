import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:  ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title};
  color: #fff;
  font-size: 40px;
`;
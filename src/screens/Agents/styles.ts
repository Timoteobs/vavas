import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:  ${({theme}) => theme.colors.primary};
`;

export const ContainerIndicator = styled.View`
  flex: 1;
  background-color:  ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title};
  color: #fff;
  font-size: 40px;
`;
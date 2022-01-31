import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color:  ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  flex: 1;
  background-color:  ${({ theme }) => theme.colors.primary};
  padding-top: 60px;
  padding-bottom: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.name};
  margin-right: 15px;
`;

export const ImageAgent = styled.Image`
  width: 400px;
  height: 400px;
`

export const ContainerImage = styled.ImageBackground`
 margin-bottom: 25px;
`;

export const AreaRole = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 15px;
`;

export const ImageRole = styled.Image`
  width: 25px;
  height: 25px;
`;

export const TitleRole = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
  margin-left: 15px;
`;

export const Role = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
  margin-left: 25px;
  margin-bottom: 10px;
`;

export const ContainerRole = styled.View`

`;

export const TextAbility = styled.Text`
  color: #fff;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 15px;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 15px;
`;

export const GoBack = styled.TouchableOpacity`
  flex: 1;
  margin-top: 60px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
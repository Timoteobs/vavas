import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color:  ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.name};
  margin-right: 15px;
`;

export const TitleRole = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #fff;
  margin-left: 15px;
`;

export const GoBack = styled.TouchableOpacity`
  flex: 1;
  margin-top: 60px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageWeapon = styled.Image`
  width: 400px;
  height: 400px;
`;

export const DetalsBody = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerDetals = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 25px;
`

export const Text = styled.Text`
  color: #fff;
  text-align: justify;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 15px;
  font-size: 23px;
`;

export const SubText = styled.Text`
  color: #fff;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 15px;
  font-size: 13px;
`;

export const DamageContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
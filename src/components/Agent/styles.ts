import styled from 'styled-components/native';




export const Container = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const NameAgent = styled.Text`
  font-size: 25px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color: #ffff;
`;

export const Role = styled.Text`
  font-size: 20px;
  font-family:  ${({ theme }) => theme.fonts.primary};
  color: #ffff;
`;

export const ImageAgent = styled.Image`
  width: 100px;
  height: 150px;
`;

export const AbilityAgent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
`;

export const Ability = styled.Image`
  margin-top: 10px;
  width: 20px;
  height: 20px;
`;

export const ImageRole = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 15px;
`;

export const BackgroundAgnet = styled.Image`
  position: absolute;
  width: 50%;
  height: 200px;
`;

export const AreaRole = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerImage = styled.ImageBackground``;



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

export const Name = styled.Text`
  font-size: 25px;
  font-family:  ${({ theme }) => theme.fonts.title};
  color: #ffff;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const AreaRole = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerImage = styled.ImageBackground``;

export const Text = styled.Text`
  font-size: 20px;
  font-family:  ${({ theme }) => theme.fonts.primary};
  color: #ffff;
`;
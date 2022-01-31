import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AgentDTO } from '../../dtos/AgentsDTO';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  ImageAgent,
  ContainerImage,
  AreaRole,
  ImageRole,
  TitleRole,
  Role,
  ContainerRole,
  TextAbility,
  TextDescription,
  GoBack,
  Title
} from './styles';

interface Params {
  agent: AgentDTO;
}

const Details: React.FC = () => {

  const route = useRoute();
  const { agent } = route.params as Params;

  const navigation = useNavigation();

  return (
    <Container>
      <GoBack onPress={() => {navigation.goBack()}}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="#fff" />
        <Title>{agent.displayName}</Title>
      </GoBack>
      <Header>
        <ContainerImage source={{ uri: agent.background }}>
          <ImageAgent source={{ uri: agent.fullPortrait }} />
        </ContainerImage>

        <Role>Especialidade</Role>
        <AreaRole>
          <ImageRole source={{ uri: agent.role.displayIcon }} />
          <TitleRole>{agent.role.displayName}</TitleRole>
        </AreaRole>

        <Role>Descrição</Role>
        <TextDescription>{agent.description}</TextDescription>

        <Role>Habilidades</Role>
        {agent.abilities.map(item => (
          <ContainerRole key={item.displayName}>
            <AreaRole>
              <ImageRole source={{ uri: item.displayIcon }} />
              <TitleRole>{item.displayName}</TitleRole>
            </AreaRole>
            <TextAbility>{item.description}</TextAbility>
          </ContainerRole>
        ))}
      </Header>

    </Container>
  );
}

export default Details;
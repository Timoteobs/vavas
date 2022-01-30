import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AgentDTO } from '../../dtos/AgentsDTO';

import {
  Container,
  Details,
  NameAgent,
  AbilityAgent,
  ImageAgent,
  Ability,
  AreaRole,
  ImageRole,
  Role,
  ContainerImage
} from './styles';

interface Props extends RectButtonProps {
  data: AgentDTO;
}

export function Agent({ data, ...rest }: Props) {
  return (
    <Container>
      <Details>
        <NameAgent>{data.displayName}</NameAgent>
        <AreaRole>
          <ImageRole source={{ uri: data.role.displayIcon }} />
          <Role>{data.role.displayName}</Role>
        </AreaRole>
        <AbilityAgent>
          {data.abilities.map((item) => {
            return <Ability key={item.slot} resizeMode='contain' source={{ uri: item.displayIcon }} />
          })}
        </AbilityAgent>
      </Details>
      <ContainerImage source={{ uri: data.background }}>
        <ImageAgent source={{ uri: data.fullPortrait }} />
      </ContainerImage>
    </Container>
  );
}

export default Agent;
import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { WeaponsDTO } from '../../dtos/WeaponsDTO';

import {
  Container,
  Name,
  Image,
  Details,
  AreaRole,
  ContainerImage,
  Text,
} from './styles';

interface Props extends RectButtonProps {
  data: WeaponsDTO;
}

export function WeaponsComponent({ data, ...rest }: Props) {
  return (
    <Container>
      <Details>
        <Name>{data.displayName}</Name>
        <Text>Custo: {data.shopData?.cost}</Text>
      </Details>
        <Image source={{ uri: data.displayIcon }} resizeMode="contain"/>
    </Container>
  )
}

export default WeaponsComponent;
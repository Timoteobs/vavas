import React from 'react';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { WeaponsDTO } from '../../dtos/WeaponsDTO';

import {
  Container,
  Title,
  GoBack,
  ImageWeapon,
  DetalsBody,
  Text,
  ContainerDetals,
  SubText,
  TitleRole,
  DamageContainer
} from './styles';

interface Params {
  weapon: WeaponsDTO;
}

const DetalsWeapons: React.FC = () => {

  const route = useRoute();
  const { weapon } = route.params as Params;
  const navigation = useNavigation();

  return (
    <Container>
      <GoBack onPress={() => { navigation.goBack() }}>
        <MaterialIcons name="keyboard-arrow-left" size={50} color="#fff" />
        <Title>{weapon.displayName}</Title>
      </GoBack>
      <ImageWeapon source={{ uri: weapon.displayIcon }} resizeMode="contain" />
      <TitleRole>Disparo</TitleRole>
      <DetalsBody>
        <ContainerDetals>
          <SubText>Cadência de Tiro:</SubText>
          <Text>{weapon.weaponStats.fireRate}</Text>
          <SubText>BALAS/SEG</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Velocidade de Corrida:</SubText>
          <Text>{weapon.weaponStats.runSpeedMultiplier}</Text>
          <SubText>M/SEG</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Velocidade ao equipar:</SubText>
          <Text>{weapon.weaponStats.equipTimeSeconds}</Text>
          <SubText>SEG</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Dispersão do tiro inicial:</SubText>
          <Text>{weapon.weaponStats.firstBulletAccuracy}</Text>
          <SubText>GRAU</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Velocidade ao carregar:</SubText>
          <Text>{weapon.weaponStats.reloadTimeSeconds}</Text>
          <SubText>SEG</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Carregador:</SubText>
          <Text>{weapon.weaponStats.magazineSize}</Text>
          <SubText>balas</SubText>
        </ContainerDetals>
      </DetalsBody>
      <TitleRole>Dano</TitleRole>
      <DamageContainer>

        <ContainerDetals>
          <SubText>Cabeça</SubText>
          <Text>{weapon.weaponStats.damageRanges[0]?.headDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[0]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[0]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Cabeça</SubText>
          <Text>{weapon.weaponStats.damageRanges[1]?.headDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[1]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[1]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Corpo</SubText>
          <Text>{weapon.weaponStats.damageRanges[0]?.bodyDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[0]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[0]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Corpo</SubText>
          <Text>{weapon.weaponStats.damageRanges[1]?.bodyDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[1]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[1]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Pernas</SubText>
          <Text>{weapon.weaponStats.damageRanges[0]?.legDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[0]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[0]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

        <ContainerDetals>
          <SubText>Pernas</SubText>
          <Text>{weapon.weaponStats.damageRanges[1]?.legDamage}</Text>
          <SubText>{weapon.weaponStats.damageRanges[1]?.rangeStartMeters} - {weapon.weaponStats.damageRanges[1]?.rangeEndMeters} M</SubText>
        </ContainerDetals>

      </DamageContainer>
    </Container>
  );
}

export default DetalsWeapons;
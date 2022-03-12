import React, { useEffect, useState } from 'react';
import api from '../../server/api';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WeaponsDTO } from '../../dtos/WeaponsDTO';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import WeaponsComponent from '../../components/Weapons';

import {
  Container,
  ContainerIndicator
} from './styles';

const Weapons: React.FC = () => {

  const [data, setData] = useState<WeaponsDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleAgentDetails = (weapon: WeaponsDTO) => {
    navigation.navigate("DetalsWeapons", { weapon })
  }

  useEffect(() => {
    async function getAgents() {
      try {
        setLoading(true);
        const response = await api.get('/weapons/?language=pt-BR&isPlayableCharacter=true');
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getAgents();
  }, []);

  return (
    <Container>
      {loading ?
        <ContainerIndicator>
          <ActivityIndicator size={'large'} color="#fff" />
        </ContainerIndicator>
        :
        <FlatList
          data={data}
          contentContainerStyle={{ padding: 15 }}
          keyExtractor={item => item.uuid}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleAgentDetails(item)}>
                <WeaponsComponent data={item} />
              </TouchableOpacity>
            )
          }}
        />
      }
    </Container>
  );
}

export default Weapons;
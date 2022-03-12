import React, { useEffect, useState } from 'react';
import Agent from '../../components/Agent';
import { AgentDTO } from '../../dtos/AgentsDTO';
import api from '../../server/api';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContainerIndicator
} from './styles';

const Agents: React.FC = () => {

  const [data, setData] = useState<AgentDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function getAgents() {
      try {
        setLoading(true);
        const response = await api.get('/agents/?language=pt-BR&isPlayableCharacter=true');
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getAgents();
  }, []);

  const handleAgentDetails = (agent: AgentDTO) => {
    navigation.navigate("Details", { agent })
  }

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
              <TouchableOpacity onPress={() => { handleAgentDetails(item) }}>
                <Agent data={item} />
              </TouchableOpacity>
            )
          }}
        />
      }
    </Container>
  );
}

export default Agents;
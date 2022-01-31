
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screens/Details';
import Home from '../screens/Home';

function Routes() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes
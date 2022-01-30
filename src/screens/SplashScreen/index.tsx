import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.jpg')}
        style={styles.background}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width,
    height,
  }
})
import { StyleSheet, Text, View } from 'react-native';
import HomePageScreen from './src/screens/HomePageScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CRAZY APP FOR MR. FAUSTO φ(゜▽゜*)♪</Text>
      <HomePageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

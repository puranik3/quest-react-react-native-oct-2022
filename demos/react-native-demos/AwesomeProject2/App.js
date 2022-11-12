import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Animations from './components/13-Animations';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animations />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

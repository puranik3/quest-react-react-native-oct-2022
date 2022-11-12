import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Touchables from './components/12-Touchables';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Touchables />
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

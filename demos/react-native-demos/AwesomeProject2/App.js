import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyAlert from './components/14-Alert';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyAlert />
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

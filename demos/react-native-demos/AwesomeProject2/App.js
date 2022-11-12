import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyModal from './components/15-MyModal';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyModal />
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

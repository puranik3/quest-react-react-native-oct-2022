import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WorkshopsList from './components/10-WorkshopsList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WorkshopsList />
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WorkshpsList from './components/09-WorkshopsList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WorkshpsList />
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

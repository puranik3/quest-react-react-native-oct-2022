import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import QuestionsList from './components/11-StackOverflow';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <QuestionsList />
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

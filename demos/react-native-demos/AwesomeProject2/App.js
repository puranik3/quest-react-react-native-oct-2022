import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlexBoxLayout from './components/06-FlexBoxLayout';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlexBoxLayout />
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

// no need to specify the .platform extension - it is picked up based on the underlying platform
import AsyncStorageDemo from './components/19-AsyncStorage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <AppButton>
        <Text>Platform-specific styled button</Text>
      </AppButton> */}
      <AsyncStorageDemo />
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

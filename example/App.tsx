import { StyleSheet, Text, View } from 'react-native';

import * as ExpoTerraSdk from 'expo-terra-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoTerraSdk.hello()}</Text>
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

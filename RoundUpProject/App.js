
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Manager</Text>
      <View style={styles.buttonContainer}>
        <Button title="Overview of Accounts" onPress={() => console.log('Overview pressed')} />
        <Button title="Edit Accounts" onPress={() => console.log('Edit pressed')} />
        <Button title="View Accounts" onPress={() => console.log('View pressed')} />
        <Button title="Create New" onPress={() => console.log('Create pressed')} />
        <Button title="Total Saved" onPress={() => console.log('Total Saved pressed')} />
      </View>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 32,
    width: '80%',
  },
});

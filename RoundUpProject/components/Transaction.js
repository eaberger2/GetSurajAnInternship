import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textstuff: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
});

function MyComponent() {
  return (
    <View>
      <Text style={styles.textstuff}>Text Tag 1</Text>
      <Text style={styles.textstuff}>Text Tag 2</Text>
      <Text style={styles.textstuff}>Text Tag 3</Text>
      <Text style={styles.textstuff}>Text Tag 4</Text>
      <Text style={styles.textstuff}>Text Tag 5</Text>
    </View>
  );
}

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function RideLogScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Pick a ride</Text>
      <Text>Enter a stop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default RideLogScreen;
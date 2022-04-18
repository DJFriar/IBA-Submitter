import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


function SettingsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>IBA Number</Text>
      <Text>Name</Text>
      <Text>Mailing Address</Text>
      <Text>Contact Phone Number</Text>
      <Text>Email Address</Text>
      <Text>Age</Text>
      <Text>Male / Female</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SettingsScreen;
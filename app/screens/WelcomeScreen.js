import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';

function WelcomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>
          IBA Submitter App
        </Text>
      </View>
      <View style={styles.mainSection}>
        <Text>
          Rider Info
        </Text>
      </View>
      <View>
        
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  mainSection: {
    marginVertical: 12,
  },
  titleBar: {
    marginVertical: 12,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "600",
  }
});

export default WelcomeScreen;
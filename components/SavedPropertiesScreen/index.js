import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SavedPropertiesScreen(props) {

  return (
    <View style={styles.container}>
      <Text>Saved Properties</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    height: 400,
    width: '100%',
  }
});
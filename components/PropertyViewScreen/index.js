import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PropertyViewScreen(props) {
  const {title, images, description} = props.route.params;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image style={styles.image} source={{uri: images[0]}} />
      <Text>{description}</Text>
      <StatusBar style="auto" />
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
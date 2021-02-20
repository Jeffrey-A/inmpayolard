import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Carousel from '../Carousel';

export default function PropertyViewScreen(props) {
  const {title, images, description} = props.route.params;

  return (
    <View style={styles.container}>
      <Carousel images={images} />
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
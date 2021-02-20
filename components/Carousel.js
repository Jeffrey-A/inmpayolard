import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import ViewPager from "@react-native-community/viewpager";

export default function Carousel(props) {
  const { images } = props;

  return (
    <ViewPager style={styles.viewPager}  initialPage={0}>
      {images &&
        images.map((imageUrl) => (
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
        ))}
    </ViewPager>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    viewPager: {
        flex: 1,
      },
    image: {
      height: 400,
      width: '100%',
    }
  });
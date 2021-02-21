import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import Search from "../Search";
import PropertyCard from "../PropertyCard";

export default class HomeScreen extends React.Component {
  render() {
    const { properties, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Search />
        </View>

        <ScrollView style={ { flex: 1, width: '90%'}}>
          {properties &&
            properties.map((property) => {
              const { id, title, thumbnail_image } = property;

              return (
                <TouchableOpacity
                  key={id}
                  onPress={() => navigation.navigate("Property View", property)}
                >
                  <PropertyCard title={title} image={thumbnail_image} />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

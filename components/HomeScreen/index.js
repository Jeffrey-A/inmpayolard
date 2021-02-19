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

export default class HomeScreen extends React.Component {
  render() {
    const { properties, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
          {properties && properties.map((property) => {
            const { id, title, thumbnail_image } = property;

            return (
              <TouchableOpacity
                key={id}
                onPress={() => navigation.navigate("Property View", property)}
              >
                <Text>{title}</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: thumbnail_image,
                  }}
                />
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

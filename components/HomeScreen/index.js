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
          {properties.map((property) => {
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
                    uri:
                      "https://inmobiliaria56.com/wp-content/uploads/2021/01/IMG_4660-700x450.jpg",
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

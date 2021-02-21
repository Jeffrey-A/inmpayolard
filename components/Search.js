import React from "react";
import { StyleSheet } from "react-native";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SearchBarExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="location" size={20} />
        <TextInput style={styles.input} placeholder="Buscar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: '90%',
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
      flex:1
  }
});

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./components/HomeScreen";
import PropertyViewScreen from "./components/PropertyViewScreen";
import SavedPropertiesScreen from "./components/SavedPropertiesScreen";
import SettingsScreen from "./components/SettingsScreen";
import PostScreen from "./components/PostScreen";
// import CarouselScreen from './components/Carousel';

import properties from "./testData";

const HomeTopTab = createMaterialTopTabNavigator();

function HomeTopTabNavigator() {
  return (
    <HomeTopTab.Navigator>
      <HomeTopTab.Screen
        name="On Sale"
        component={(props) => <HomeScreen properties={properties} {...props} />}
      />
      <HomeTopTab.Screen
        name="Renting"
        component={(props) => <HomeScreen properties={properties} {...props} />}
      />
    </HomeTopTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeTopTabNavigator} />
      <HomeStack.Screen
        name="Property View"
        component={PropertyViewScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator style={styles.bottomNavigator}>
        <BottomTab.Screen
          name="Home"
          options={{
            tabBarLabel: "Explorar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
          component={HomeStackNavigator}
        />
        <BottomTab.Screen
          name="Saved"
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
          component={SavedPropertiesScreen}
        />
        <BottomTab.Screen
          name="post"
          options={{
            tabBarLabel: "Publicar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
          component={PostScreen}
        />
        <BottomTab.Screen
          name="settings"
          options={{
            tabBarLabel: "Ajustes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
          component={SettingsScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

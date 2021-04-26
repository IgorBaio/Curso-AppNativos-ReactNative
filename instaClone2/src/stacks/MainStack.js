import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "./MainTab";
import Registro from "../screens/Registro";
const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTab" component={MainTab } />
      {/* <Stack.Screen name="Registro" component={Registro } /> */}

    </Stack.Navigator>
  );
};

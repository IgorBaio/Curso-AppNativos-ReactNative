import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Registro from "../screens/Registro";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "../screens/Login";
const Stack = createStackNavigator()

export default ({route,navigation}) => {
  const {params} = route
  console.log(route)
  console.log(params)


  return (
    <Stack.Navigator
      initialRouteName={params.namePage || 'Login'}
      screenOptions={{
        headerShown: true
      }}
    >
      {/* <Stack.Screen name="MainTab" component={MainTab } /> */}
      <Stack.Screen name="Register" 
       component={Registro}
       options={{
         headerLeft: () => (
           <TouchableOpacity
           style={{left:15}}
           onPress={() => navigation.navigate('Login')}
           >
            <Icon name='arrow-left-circle' size={30} color="#000"/>
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="Login" component={Login } options={{
         headerLeft: () => (
           <TouchableOpacity
           style={{left:15}}
           onPress={() => navigation.navigate('Feed')}
           >
            <Icon name='arrow-left-circle' size={30} color="#000"/>
          </TouchableOpacity>
        ),
      }} />

    </Stack.Navigator>
  );
};

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator } from "react-navigation-switch-transitioner";
import CustomTabBar from '../components/CustomTabBar'
import Feed from "../screens/Feed";
import AddPhoto from "../screens/AddPhoto";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import MainStack from "./MainStack copy";
import Splash from "../screens/Splash";

// const authRouter = createStackNavigator({
//   Login: { screen: Login, navigationOptions: { title: 'Login' } },
//   Register: { screen: Registro, navigationOptions: { title: 'Registro' } }
// }, {
//   initialRouteName: 'Login'
// })

// const loginOrProfile = createSwitchNavigator({
//   Profile: Profile,
//   Auth: MainStack
// },
//   {
//     initialRouteName: 'Profile'
//   })

const Tab = createBottomTabNavigator();

export default (props) => (
  <Tab.Navigator
  initialRouteName='Splash'
    tabBar={props => <CustomTabBar {...props} />}
  >
    <Tab.Screen name="Splash" component={Splash} />
    {/* <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="AddPhoto" component={AddPhoto} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Auth" component={Login} />
    <Tab.Screen name="MainStack" component={MainStack} />
    <Tab.Screen name="loginOrProfile" component={loginOrProfile} /> */}
  </Tab.Navigator>
);

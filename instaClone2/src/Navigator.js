import React from 'react'
import { NavigationContainer } from '@react-navigation/stack';
import MainStack from './stacks/MainStack';
import { LogBox } from 'react-native';
import Splash from './screens/Splash';
import { Provider } from "react-redux";
// import storeConfig from '../src/store/storeConfig'
// const store = storeConfig()
export default (props) => {
    LogBox.ignoreLogs([
        "Accessing the 'state'"
    ])
    return (
        // <Provider store={store}>
            <NavigationContainer>
                <Splash />
                {/* <MainStack /> */}
            </NavigationContainer>
        //{/* </Provider> */}
    )
};
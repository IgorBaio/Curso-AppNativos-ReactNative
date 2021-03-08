import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import App from "./App";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { configureSaveReducer } from "./src/store/configureStore";

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: '',
    values: [0, 0],
    current: 0,
    marked: false
}

export default () => {
    const store = configureSaveReducer()
    

    return (
        <Provider store={store}>
            <App />
        </Provider >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

})
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#888"
    },
    buttonMarked: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#888"
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    operationButtonMarked: {
        color: '#fa8231',
        backgroundColor: '#fff',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,

    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default (props) => {
    const marked = useSelector(state => state.save.marked)
    const markedLabel = useSelector(state => state.save.markedLabel)
    const stylesButton = props.operation && marked ? [styles.buttonMarked] : [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) {
        if (marked && markedLabel === props.label) {
            stylesButton.push(styles.operationButtonMarked)
            console.log('marked')
        } else {
            console.log('!marked')

            stylesButton.push(styles.operationButton);
        }
    }
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)} >
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
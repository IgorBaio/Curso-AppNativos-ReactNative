import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Estilo from '../estilo'

export default (props) => {
    return (
        // <View style={style.Botoes}>
        <>
            <Button title=" + " onPress={props.inc} />
            <Button title=" - " onPress={props.dec} />
        {/* </View> */}
        </>
)
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection:"row",
        margin:2
    }
})
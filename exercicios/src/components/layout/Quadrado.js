import React from 'react';
import {  SafeAreaView} from 'react-native';
import Estilo from '../estilo'

export default (props) => {
    const lado = props.lado || 50;
    return (
        <SafeAreaView style={{
            height:lado,
            width:lado,
            backgroundColor:props.cor || "#000"
        }}>

        
        </SafeAreaView>
)
}
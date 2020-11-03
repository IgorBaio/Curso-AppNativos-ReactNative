import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <SafeAreaView style={style.container}>
            <Text style={[Estilo.fontG, style.num]}>
                    {num}
            </Text>
        </SafeAreaView>
)
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        height:50,
        width:50,
        margin: 5,
        borderRadius:25,
    },
    num:{
        color:"#fff",
    }
})
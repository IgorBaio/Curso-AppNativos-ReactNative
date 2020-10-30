import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
            <Quadrado cor="#900" />
            <Quadrado cor="#090" />
            <Quadrado cor="#009" />
        </SafeAreaView>
)
}

const style = StyleSheet.create({
    FlexV2:{
        flex:1,
        width:"100%",
        alignItems:"flex-end",
        justifyContent:"space-between",
        backgroundColor:'orange',
    }
})
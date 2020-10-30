import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <SafeAreaView style={style.FlexV3}>
            <Quadrado cor="#F00" lado={20} />
            <Quadrado cor="#0F0" lado={30} />
            <Quadrado cor="#00F" lado={40} />
            <Quadrado cor="#900" lado={50} />
            <Quadrado cor="#090" lado={60} />
            <Quadrado cor="#009" lado={70} />
        </SafeAreaView>
)
}

const style = StyleSheet.create({
    FlexV3:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        height:350,
        width:"100%",
        backgroundColor:'#000',
    }
})
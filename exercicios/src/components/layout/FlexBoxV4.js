import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';

export default (props) => {
    return (
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.v0} />
            <SafeAreaView style={style.v1} />
            <SafeAreaView style={style.v2} />
        </SafeAreaView>
)
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow:1,
        width:100,
        backgroundColor:'#000',
    },
    v0:{
        backgroundColor:"#36c9a7",
        height:300,
    },
    v1:{
        backgroundColor:"#ff801a",
        flexGrow:9,
    },
    v2: {
        backgroundColor: "#dd22c1",
        flexGrow: 3,
    }
})
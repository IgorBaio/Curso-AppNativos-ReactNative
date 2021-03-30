import React from "react"
import {
    StyleSheet,
    Text, View, Image
} from "react-native"
import { Gravatar } from "react-native-gravatar";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    gravatar:{
        width:30,
        height:30,
        borderRadius:15,
        marginHorizontal:10
    },
    nickname:{
        color:'#444',
        marginVertical:10,
        fontSize:15,
        fontWeight:'bold'
    }
})

export default ({email,nickname})=>{
    return (
        <View style={styles.container} >
            <Gravatar options={{email,secure:true}} style={styles.gravatar} />
            <Text style={styles.nickname}>{nickname}</Text>
        </View>
    )
}
import React from "react"
import { connect, useSelector } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'

import {
    StyleSheet,
    Text, View, Platform, Image
} from "react-native"
import icon from "../assets/img/icon.png";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB",
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: "shelter",
        height: 30,
        fontSize: 28
    },
    userContainer:{
        flexDirection:'row',
        alignItems:'center',

    },
    user:{
        fontSize:10,
        color:'#888'
    },
    avatar:{
        width:30,
        height:30,
        marginLeft:10
    }
})

const mapStateToProps = ({user}) => {
    return{
        email: user.email,
        name: user.email
    }
}

const Header = () => {
    const name = useSelector(state=>state.user.name)
    const email = useSelector(state=>state.user.email)
    const nameUser = name || 'Anonymous'
    const gravatar = email ? 
        <Gravatar 
            options={{ email, secure: true }}
            style={styles.avatar} 
        /> 
        : false
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.title} >InstaClone</Text>
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.user}>
                   {nameUser} 
                </Text>
                {gravatar}

            </View>
        </View>
    )
}

export default connect(mapStateToProps,null)(Header)
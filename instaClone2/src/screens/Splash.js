import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
        height:200,
        width: 200,
        resizeMode: 'contain'
    }
  });

export default () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(
            () => {navigation.navigate('Feed')},
            2000
        )
    },[])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/icon.png')} style={styles.image} />
            <Text style={styles.container}>InstaClone</Text>
        </View>
    )
}
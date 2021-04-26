import React, { useState } from 'react'
import {
    StyleSheet,
    FlatList, View
} from "react-native"
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Post from '../components/Post'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
})

export default () => {
    // const [posts, setPosts] = useState()
    const posts = useSelector(state=>state.posts.posts)
    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item})=> <Post key={item.id} {...item} />}
            />
        </View>
    )
}
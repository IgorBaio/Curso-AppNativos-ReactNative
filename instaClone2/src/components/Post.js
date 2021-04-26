import React from "react"
import {
    StyleSheet,
    View, Image, Dimensions
} from "react-native"
import icon from "../assets/img/icon.png";
import { useSelector } from 'react-redux'
import AddComment from "./AddComment";
import Autor from "./Autor";
import Comments from "./Comments";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (3 / 4),
        resizeMode: 'contain',
    }
})

export default ({ id, image, comments, email, nickname }) => {
    const name = useSelector(state=>state.user.name)
    const addComment = name ? <AddComment postId={id} /> : false
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Autor email="fulano@email.com" nickname="Fulano" />
            <Comments comments={comments} />
            {addComment}
        </View>
    )
}
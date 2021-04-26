import React, { useState } from "react"
import {
    StyleSheet,
    Text, View, Platform, Image,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from "react-native"
import { connect, useSelector } from "react-redux";
import { addComment } from "../store/actions/posts";
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:10
    },
    caption:{
        marginLeft:10,
        fontSize:12,
        color:"#CCC"
    },
    input:{
        width:'90%'
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComment(payload))
    }
}

const AddComment = ({onAddComment,postId}) => {
    const name = useSelector(state => state.user.name)
    const [comment, setComment] = useState('')
    const [editMode, setEditMode] = useState(false)
    let commentArea = null
    
    const handleAddComment = () => {
        onAddComment({
            postId,
            comment:{ 
                nickname: name,
                comment
            }
        })
        setComment('')
        setEditMode(false)
    }

    if (editMode) {
        commentArea = (
            <View style={styles.container}>
                <TextInput placeholder="Pode comentar..."
                    style={styles.input} autoFocus value={comment}
                    onChangeText={(text) => setComment(text)}
                    onSubmitEditing={handleAddComment} />
                <TWF onPress={() => setEditMode(false)}>
                    <Icon name="times" size={15} color="#555" />
                </TWF>
            </View>
        )
    } else {
        commentArea = (
            <TWF onPress={() => setEditMode(true)}>
                <View style={styles.container}>
                    <Icon name="comment-o" size={25} color="#555" />
                    <Text style={styles.caption}>Adicione um comentário</Text>
                </View>
            </TWF>
        )
    }

    return (
        <View style={{flex:1}}>
            {commentArea}
        </View>
    )
}

export default connect(null,mapDispatchToProps)(AddComment)
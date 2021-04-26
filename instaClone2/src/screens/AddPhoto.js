import React, { useState } from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    Text
} from "react-native"
import { connect, useSelector } from "react-redux";
import { addPost } from "../store/actions/posts";
import * as ImagePicker from 'react-native-image-picker'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: "90%",
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: "100%",
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',


    },
    input: {
        marginTop: 20,
        width: "90%"
    }
})


const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

const noUser = 'Você precisa estar logado para adicionar imagens'

const AddPhoto = ({ navigation, onAddPost }) => {
    const name = useSelector(state => state.user.name)
    const email = useSelector(state => state.user.email)
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')

    const pickImage = () => {
        ImagePicker.launchImageLibrary({
            title: 'Escolha a Imagem',
            maxWidth: 800,
            maxHeight: 600
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.uri, base64: res.base64 })
            }
        })
    }

    const save = async () => {
        onAddPost({
            id: Math.random(),
            nickname: name,
            email,
            image,
            comments: [{
                nickname: name,
                comment
            }]



        })
        setImage(null)
        setComment('')
        navigation.navigate('Feed')
        // Alert.alert('Imagem Adicionada', comment)
    }
    if (!name) {
        return (
            <View style={styles.container}>
                <Text style={[styles.title,{textAlign:'center'}]}>{noUser}</Text>
            </View>)
    }
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image?.uri }} style={styles.image} />
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.buttom}>
                    <Text style={styles.buttomText}>Escolha a Imagem</Text>
                </TouchableOpacity>
                <TextInput placeholder="Legenda"
                    style={styles.input}
                    value={comment}
                    onChangeText={commentText => setComment(commentText)} />
                <TouchableOpacity
                    onPress={save}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

export default connect(null, mapDispatchToProps)(AddPhoto)
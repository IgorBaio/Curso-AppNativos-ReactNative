import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Text
} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        marginTop:30,
        padding:10,
        backgroundColor:'#4286f4'
    },
    buttonText:{
        fontSize:20,
        color:'#fff'
    },
    input:{
        marginTop:20,
        width:'90%',
        backgroundColor:'#eee',
        height:40,
        borderWidth:1,
        borderColor:'#333',
        paddingLeft:15
    }
})

export default ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <View style={styles.container}>
            <TextInput placeholder="Nome" 
                style={styles.input}
                autoFocus
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            <TextInput placeholder="Email" 
                style={styles.input}
                value={email}
                keyboardType='email-address'
                onChangeText={(text)=>setEmail(text)}
            />
            <TextInput placeholder="Senha" 
                style={styles.input}
                value={password}
                secureTextEntry
                onChangeText={(text)=>setPassword(text)}
            />
            <TouchableOpacity onPress={()=>{}} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
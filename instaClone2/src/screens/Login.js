import React, { useState } from 'react'
import { connect } from "react-redux";
import {login} from '../store/actions/user'
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
        borderColor:'#333'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

const Login = ({ navigation, onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const name = 'TEmp'
    const login = () => {
        onLogin({
            email,
            name,
            password
        })
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email'
                style={styles.input}
                autoFocus
                keyboardType='email-address'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholder='Senha'
                style={styles.input}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity 
                onPress={login} 
                style={styles.button}>
                
                <Text style={styles.buttonText}>
                    Login
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('Register')}} 
                style={styles.button}>
                
                <Text style={styles.buttonText}>
                    Criar nova conta
                </Text>

            </TouchableOpacity>
            

        </View>
    )
}

export default connect(null, mapDispatchToProps)(Login)
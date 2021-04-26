import React, { useState } from 'react'
import { connect, useSelector } from "react-redux";
import { logout } from '../store/actions/user'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from "react-native"
import { Gravatar } from "react-native-gravatar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 100

    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'

    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name:user.name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

const Profile = ({ navigation, onLogout }) => {
    const email = useSelector(state=>state.user.email)
    const name = useSelector(state=>state.user.name)
    const options = { email, secure: true }

    const logout = () => {
        onLogout()
        navigation.navigate('MainStack', { namePage: 'Login' })
    }
    return (
        <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
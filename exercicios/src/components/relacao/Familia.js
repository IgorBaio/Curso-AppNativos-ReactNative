import React from 'react';
import {Text } from 'react-native';
import Estilo from '../estilo'
import Membro from './Membro'

export default (props) => {
    let x= 13;
    let y = 1000;
    return (
        <>
            <Text style={Estilo.fontG}>[INICIO] Membros da Família: </Text>
            {props.children}
            <Text style={Estilo.fontG}>[FIM] Membros da Família: </Text>
        </>
)
}
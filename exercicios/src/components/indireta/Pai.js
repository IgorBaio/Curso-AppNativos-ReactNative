import React, { useState } from 'react';
import {Text } from 'react-native';
import Estilo from '../estilo'
import Filho from './Filho'

export default (props) => {
    const [texto,setTexo] = useState();
    const [num,setNum] = useState(0);
    let x= 13;
    let y = 1000;

    function exibirValor(numero,texto){
        setNum(numero)
        setTexo(texto)
    }
    return (
        <>
            <Text style={Estilo.fontG}>{texto}{num}</Text>
            <Filho 
                min={x}
                max={y} 
                funcao={exibirValor}
            />
        </>
)
}
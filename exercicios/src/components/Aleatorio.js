import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo'

export default (props) => {
    
    const getRandomNumber = (min, max) =>{
        return Math.max(min, Math.ceil(Math.random()*max));
    }

    let result = 0;

    if(props.min >= props.max){
         result = getRandomNumber(props.max, props.min)
    }else{
        result = getRandomNumber(props.min,props.max)
    }
    console.warn(props)
    return (
        <Text style={Estilo.fontG}>
            {result}
        </Text>
    )
}
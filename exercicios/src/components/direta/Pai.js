import React from 'react';
import {Text } from 'react-native';
import Estilo from '../estilo'
import Filho from './Filho'

export default (props) => {
    let x= 13;
    let y = 1000;
    return (
        <>
        <Filho a={x} b={y} />
        <Filho a={x+200} b={y+100} />
        </>
)
}
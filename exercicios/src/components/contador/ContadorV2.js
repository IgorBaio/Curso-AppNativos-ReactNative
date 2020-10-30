import React, {useState} from 'react';
import {Text, View } from 'react-native';
import Estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default (props) => {
    const [num,setNum] = useState(0);

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return (
        <>
            <Text style={Estilo.fontG}>
                ContadorV2   
            </Text>
            <View style={{width:300}}>
                <ContadorDisplay num={num}/>
                <ContadorBotoes inc={inc} dec={dec} />
            </View>
        </>
)
}
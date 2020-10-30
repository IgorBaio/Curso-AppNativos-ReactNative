import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput} from 'react-native';
import Estilo from './estilo'

export default (props) => {
    const [nome,setNome] = useState('Teste')
    return (
        <SafeAreaView>
            <TextInput 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome =>setNome(nome)}
            />
        {/* <Text style={Estilo.fontG}>
                
        </Text> */}
        </SafeAreaView>
)
}
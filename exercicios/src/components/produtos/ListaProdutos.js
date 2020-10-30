import React from 'react';
import { Text} from 'react-native';
import Estilo from '../estilo'
import produtos from './produtos'

export default (props) => {
    const obterLista = () =>{
        return produtos.map((item) => {
            return (
                <Text key={`${item.id}_${item.nome}`}>
                    {item.id}) {item.nome} custa R$ {item.preco}
                </Text>
            )
        })
    }

    return (
        <>
        <Text style={Estilo.fontG}>
           Lista de produtos:
        </Text>
        {obterLista()}    
        </>
)
}
import React from 'react';
import { FlatList, Text} from 'react-native';
import Estilo from '../estilo'
import produtos from './produtos'

export default (props) => {
    const obterLista = ({ item }) => {
        return ( 
        <Text >
            {item.id}) {item.nome} custa R$ {item.preco}
        </Text>
        )
    }
        
    

    return (
        <>
        <Text style={Estilo.fontG}>
           Lista de produtos:
        </Text>
        <FlatList
            data={produtos}
                keyExtractor={item => `${item.id}_${item.nome}`}
            renderItem={obterLista}
            // ItemSeparatorComponent
        />
        </>
)
}
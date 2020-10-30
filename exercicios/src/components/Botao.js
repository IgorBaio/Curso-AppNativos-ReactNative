import React from 'react';
import {Button} from 'react-native';
import Estilo from './estilo'

export default (props) => {
   const executar = () =>{
    console.warn("Executei 1")
   }
    return (
        <>
            <Button 
                title="Executar #01!"
                onPress={executar}    
            />
            <Button 
                title="Executar #02!"
                onPress={()=>console.warn("Executei 2")}    
            />
            <Button 
                title="Executar #03!"
                onPress={function(){console.warn("Executei 3")}}    
            />
        </>
    )
}
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


export default props =>{
    return(
        <View style={{
            flex:1,
        }}>
            <View>
                
                {props.avancar ?
                    <Button 
                        title='Avançar' 
                        onPress={()=>{ props.navigation.navigate(
                                            props.avancar,
                                            props.avancarParams
                                            // {
                                            //     numero:parseInt(Math.random()* 100)
                                            // }
                                            // //navegacao com parametro
                                            )}} />
                    : false
                }
            </View>

            <View style={{
            flex:1,
            }}>
                {props.children}
            </View>
            <View>
                {props.voltar ?
                    <Button title='Voltar' onPress={()=>{ props.navigation.goBack()}} />
                    : false
                }
            </View>
        </View>
    )
}
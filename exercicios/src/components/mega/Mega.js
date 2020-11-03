import React, { Component } from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component{
    // constructor(props){
    //     super(props)
    //     this.qtdNumeros = props.qtdNumeros; 

    // }

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    render(){
        return(
            <>
                <Text style={Estilo.fontG}>Gerador de mega sena {this.props.qtdNumeros}</Text>
            </>
        )
    }
}
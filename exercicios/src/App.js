import React from 'react'
import {SafeAreaView,View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro'
import Comp, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/direta/Pai'
import PaiIndireta from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import FlexBoxV1 from './components/layout/FlexBoxV1'
import FlexBoxV2 from './components/layout/FlexBoxV2'
import FlexBoxV3 from './components/layout/FlexBoxV3'
import FlexBoxV4 from './components/layout/FlexBoxV4'

export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV4 />
        {/* <FlexBoxV3 /> */}
        {/* <FlexBoxV2 /> */}
        {/* <FlexBoxV1 /> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={{nome:"Igor", email:"igorbaio@email.com"}}/>
        <UsuarioLogado usuario={{nome:"Igor"}}/>
        <UsuarioLogado usuario={{email:"igorbaio@email.com"}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <UsuarioLogado /> */}
        {/* <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Júlia" sobrenome="Silva" />
        </Familia>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
            <Membro nome="Gui" sobrenome="Arruda" />
            <Membro nome="Rebeca" sobrenome="Arruda" />
        </Familia> */}
        {/* <ParImpar num={3} />
        <ParImpar num={4} />
        <ParImpar num={3623} /> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <PaiIndireta /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro" secundario="Tela de cadastro" /> */}
        {/* <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> */}
        {/* <MinMax min={1} max={20} /> */}
        {/* <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20

    }
})
import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Jogo from './jogo';
import Outros from './outros';
import Sobre from './sobre';
import Resultado from './resultado';


export default Rotas = () => (
    <Router>
        <Stack key="root" >
        <Scene key='jogo' component={Jogo} title='Cara ou coroa?' initial/>
        <Scene key='sobre' component={Sobre} title='Sobre'/>
        <Scene key='outros' component={Outros} title='Outros jogos'/>
        <Scene key='resultado' component={Resultado} title='Cara ou coroa?'/>
        </Stack>
    </Router>
);

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const logo = require('../../assets/imgs/logo.png');
const btnJogar = require('../../assets/imgs/botao_jogar.png');
const sobre = require('../../assets/imgs/sobre_jogo.png');
const outros = require('../../assets/imgs/outros_jogos.png');


export default class Jogo extends Component {
  render() {
    return (
      <View style={styles.content.view}>
        <View style={styles.content.jogo.view}>
          <Image source={logo} style={styles.content.jogo.moeda}/>
          <TouchableHighlight onPress={() => {Actions.resultado()}}>
            <Image source={btnJogar} style={styles.content.jogo.botao}/>
          </TouchableHighlight>
        </View>
        <View style={styles.content.extras.view}>
          <TouchableHighlight onPress={() => {Actions.sobre()}}>
            <Image source={sobre} style={styles.content.extras.sobre}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {Actions.outros()}}>
            <Image source={outros} style={styles.content.extras.outros}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = {
  content:{
    view:{
      flex:1,
      backgroundColor: '#61bd8c'
    },
    jogo:{
      view:{
        flex:10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      moeda:{
        
      },
      botao:{
        marginTop: 10
      }
    },
    extras:{
      view:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      outros:{

      },
      extras:{

      }
    }
  }
}
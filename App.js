
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const logo = require('./assets/imgs/logo.png');
const btnJogar = require('./assets/imgs/botao_jogar.png');
const sobre = require('./assets/imgs/sobre_jogo.png');
const outros = require('./assets/imgs/outros_jogos.png');


export default class App extends Component {
  render() {
    return (
      <View style={styles.content.view}>
        <View style={styles.content.jogo.view}>
          <Image source={logo} style={styles.content.jogo.moeda}/>
          <Image source={btnJogar} style={styles.content.jogo.botao}/>
        </View>
        <View style={styles.content.extras.view}>
          <Image source={sobre} style={styles.content.extras.sobre}/>
          <Image source={outros} style={styles.content.extras.outros}/>
        </View>
      </View>
    );
  }
}

const styles = {
  content:{
    view:{
      marginTop:20,
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
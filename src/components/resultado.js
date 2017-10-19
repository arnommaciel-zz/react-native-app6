
import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const cara = require('../../assets/imgs/moeda_cara.png');
const coroa = require('../../assets/imgs/moeda_coroa.png');
const btnJogar = require('../../assets/imgs/botao_jogar.png');

export default class Resultado extends Component {
  constructor(props){
    super(props);
    this.state = {
        moeda: cara,
        loop: 0,
        loopState: 0,
        resultado: ''
    }
  }

  animarMoeda() {
    const random = Math.floor(Math.random() * 2);
    
    let moeda = [
        cara,
        coroa
    ];

    this.setState({resultado:moeda[random]});

    if(this.state.loop < 10){
        const self = this;
        setTimeout(function(){
            let loopStatus = '';
            if(self.state.loopState === 0){
                loopState = 1
            } else loopState = 0;

            self.setState({
                loop: self.state.loop + 1,
                loopState: loopState,
                moeda: moeda[loopState]
            });
            self.animarMoeda();
        },200);
    } else{
        this.setState({
            loop: 0,
            moeda: this.state.resultado
        });
    }
  }
  componentDidMount() {
      this.animarMoeda();
  }
  render() {
    return (
        <View style={styles.content.view}>
            <Image source={this.state.moeda} />
            <TouchableHighlight onPress={() => {this.animarMoeda()}}>
                <Image source={btnJogar} style={styles.content.jogo.botao}/>
            </TouchableHighlight>
        </View>
    );
  }
}

const styles = {
  content:{
    view:{
      flex:1,
      backgroundColor: '#61bd8c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    jogo:{
        botao:{
          marginTop: 10
        }
    }
  }
}
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import params from './Params';
import Field from './components/Field';
import MineField from './components/MineField';
import { createMineBoard } from './Logic';

export default class App extends Component  {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount())
    }
  }

  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.highlight}>Tomanho da grade: 
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignContent: 'center',
    backgroundColor: '#AAA',
  }
});
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import params from './Params';
import Field from './components/Field';

export default class App extends Component  {

  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.highlight}>Tomanho da grade: 
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined/>
        <Field mined opened/>
        <Field mined opened exploded/>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
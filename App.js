import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AddTodoModal from './src/components/AddTodoModal';
import MainScreen from './src/screen/MainScreen';

export default class App extends Component {
  render() {
    return (
      <>
        <MainScreen />
        <AddTodoModal />
      </>
    );
  }
}

const styles = StyleSheet.create({});

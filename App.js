import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AddTodoModal from './src/components/AddTodoModal';
import MainScreen from './src/screen/MainScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  render() {
    return (
      <>
        <MainScreen />
        <AddTodoModal visible={this.state.modalVisible} />
      </>
    );
  }
}

const styles = StyleSheet.create({});

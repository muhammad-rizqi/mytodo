import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import AddTodoModal from './src/components/AddTodoModal';
import MainScreen from './src/screen/MainScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  closeModal = () => {
    this.setState({modalVisible: false});
  };
  openModal = () => {
    this.setState({modalVisible: true});
  };
  render() {
    return (
      <>
        <MainScreen onAdd={() => this.openModal()} />
        <AddTodoModal
          visible={this.state.modalVisible}
          onClose={() => {
            this.closeModal();
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({});

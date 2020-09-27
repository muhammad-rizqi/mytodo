import React, {Component} from 'react';
import AddTodoModal from './src/components/AddTodoModal';
import DetailScreen from './src/screen/DetailScreen';
import MainScreen from './src/screen/MainScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: [],
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
        <MainScreen onAdd={() => this.openModal()} data={this.state.data} />
        <AddTodoModal
          visible={this.state.modalVisible}
          onClose={() => {
            this.closeModal();
          }}
          data={this.state.data}
        />
      </>
    );
  }
}

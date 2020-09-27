import React, {Component} from 'react';
import AddTodoModal from '../components/AddTodoModal';
import MainScreen from './MainScreen';

class AppScreen extends Component {
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
        <MainScreen
          onAdd={() => this.openModal()}
          data={this.state.data}
          navigate={(props) => this.props.navigation.navigate('Detail', props)}
        />
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

export default AppScreen;

import React, {Component} from 'react';
import {
  Text,
  Image,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export default class AddTodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible,
    };
  }
  render() {
    return (
      <Modal animationType="slide" visible={this.state.modalVisible}>
        <View>
          <KeyboardAvoidingView behavior="position">
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => this.setState({modalVisible: false})}>
              <Image source={require('../assets/close_24px_outlined.png')} />
            </TouchableOpacity>
            <View style={styles.heading}>
              <Text style={styles.headingText}>ADD TODO</Text>
              <View style={styles.headingLine} />
            </View>
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.titleInput}>Title :</Text>
                <TextInput style={styles.titleInputText} placeholder="Todo" />
              </View>
              <View style={styles.input}>
                <Text style={styles.titleInput}>Description :</Text>
                <TextInput
                  style={[styles.titleInputText, styles.descriptionInput]}
                  placeholder="Tell me what to do"
                  multiline={true}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.setState({modalVisible: false})}>
                  <Text style={styles.buttonText}>ADD TODO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  heading: {
    marginTop: 107,
    alignSelf: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1D71AA',
  },
  headingLine: {
    height: 3,
    width: 96,
    backgroundColor: '#1D71AA',
  },
  form: {
    margin: 32,
  },
  titleInput: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  titleInputText: {
    marginVertical: 16,
    borderRadius: 5,
    paddingHorizontal: 16,
    backgroundColor: '#e1e1e1',
  },
  descriptionInput: {
    textAlignVertical: 'top',
    height: 120,
  },
  button: {
    height: 44,
    width: 178,
    alignSelf: 'center',
    backgroundColor: '#1D71AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
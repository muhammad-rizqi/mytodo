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
      id: this.props.data.length,
      title: '',
      description: '',
    };
    console.log(this.props.data);
  }
  render() {
    return (
      <Modal animationType="slide" visible={this.props.visible}>
        <View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => this.props.onClose()}>
            <Image source={require('../assets/close_24px_outlined.png')} />
          </TouchableOpacity>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.heading}>
              <Text style={styles.headingText}>ADD TODO</Text>
              <View style={styles.headingLine} />
            </View>
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.titleInput}>Title :</Text>
                <TextInput
                  style={styles.titleInputText}
                  placeholder="Todo"
                  onChangeText={(title) => this.setState({title: title})}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.titleInput}>Description :</Text>
                <TextInput
                  style={[styles.titleInputText, styles.descriptionInput]}
                  placeholder="Tell me what to do"
                  multiline={true}
                  onChangeText={(title) => this.setState({description: title})}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.onClose();
                    this.props.data.push(this.state);
                    console.log(this.props.data);
                  }}>
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
    alignSelf: 'flex-end',
    marginRight: 16,
    top: 16,
  },
  heading: {
    marginTop: 56,
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

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class ListComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      strike: false,
    };
  }

  toggleStrike = () => {
    this.setState({strike: !this.state.strike});
  };
  render() {
    return (
      <View style={[styles.list, this.props.addedStyle]}>
        <Text
          style={{
            flex: 9,
            fontWeight: 'bold',
            textDecorationLine: this.state.strike ? 'line-through' : 'none',
            color: this.state.strike ? '#aeaeae' : 'black',
          }}>
          {this.props.todoText}
        </Text>
        <TouchableOpacity
          onPress={() => this.toggleStrike()}
          style={{flex: 1, marginHorizontal: 4}}>
          <Image
            source={require('../assets/done_24px_outlined.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            this.props.onDelete();
          }}>
          <Image
            source={require('../assets/delete_24px_outlined.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    height: 50,
    alignItems: 'center',
    padding: 16,
    borderRadius: 5,
  },
});

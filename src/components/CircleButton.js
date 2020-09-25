import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class CircleButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onClick();
        }}
        style={styles.button}>
        <Image
          source={require('../assets/add_24px_outlined.png')}
          style={styles.plus}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  plus: {
    height: 24,
    width: 24,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#1D71AA',
  },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> MY TODO </Text>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
  },
  line: {
    backgroundColor: 'white',
    height: 3,
    width: 96,
  },
});

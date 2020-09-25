import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <Image
            source={require('../assets/data_empty.png')}
            style={styles.emptyImage}
          />
          <View style={styles.fab}>
            <CircleButton
              onClick={() => {
                alert('Hello');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D71AA',
    paddingTop: 12,
  },
  main: {
    flex: 7,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
  },
  emptyImage: {
    width: 300,
    height: 286,
    alignSelf: 'center',
    marginTop: 92,
  },
});

export default MainScreen;

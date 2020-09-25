import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.splash}>
        <Image
          style={styles.splashImage}
          source={require('../assets/Splash.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 150,
    height: 134,
  },
});

import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ImageEmpty = () => {
  return (
    <Image
      source={require('../assets/data_empty.png')}
      style={styles.emptyImage}
    />
  );
};

const styles = StyleSheet.create({
  emptyImage: {
    width: 300,
    height: 286,
    alignSelf: 'center',
    marginTop: 92,
  },
});
export default ImageEmpty;

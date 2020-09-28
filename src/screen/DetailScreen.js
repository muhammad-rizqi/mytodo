import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {params} = this.props.route;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}>
          <Image source={require('../assets/arrow_back_24px_outlined.png')} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Header />
        </View>
        <View style={styles.main}>
          <ScrollView>
            <Text style={styles.titleText}>{params.title}</Text>
            <View style={styles.divider} />
            <Text style={styles.descriptionText}>{params.description}</Text>
          </ScrollView>
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
    flex: 9,
    marginTop: 32,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleText: {
    marginVertical: 16,
    marginHorizontal: 24,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
  descriptionText: {
    marginHorizontal: 24,
    marginVertical: 16,
    fontSize: 14,
  },
  divider: {
    alignSelf: 'center',
    width: 96,
    backgroundColor: 'black',
    height: 3,
    margin: 16,
  },
  backButton: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
});

export default DetailScreen;

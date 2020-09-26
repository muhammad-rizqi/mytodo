import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';
import ListComponents from '../components/ListComponents';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: 'the'},
        {id: 2, title: 'quick'},
        {id: 3, title: 'brown'},
        {id: 4, title: 'fox'},
        {id: 5, title: 'jumps'},
        {id: 6, title: 'over'},
        {id: 7, title: 'the'},
        {id: 9, title: 'lazy'},
        {id: 10, title: 'dig'},
        {id: 11, title: 'the quick brown fox jumps over the lazy dog'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          {/* <Image
            source={require('../assets/data_empty.png')}
            style={styles.emptyImage}
          /> */}
          <View
            style={{
              marginTop: 42,
              height: 400,
              paddingHorizontal: 32,
            }}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.id}
              renderItem={({item, index}) => (
                <ListComponents
                  key={index.toString()}
                  todoText={item.title}
                  addedStyle={{marginVertical: 8}}
                />
              )}
            />
          </View>
          <View style={styles.fab}>
            <CircleButton onClick={() => this.props.onAdd()} />
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

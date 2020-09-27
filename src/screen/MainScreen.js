/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';
import ImageEmpty from '../components/ImageEmpty';
import ListComponents from '../components/ListComponents';

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          {this.props.data.length === 0 ? (
            <ImageEmpty />
          ) : (
            <View style={styles.listContainer}>
              <FlatList
                data={this.props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <ListComponents
                    key={item.id.toString()}
                    todoText={item.title}
                    addedStyle={{marginVertical: 8}}
                    onDelete={() => {
                      this.props.data.splice(index, 1);
                      this.forceUpdate();
                    }}
                    onClick={() => this.props.navigate(item)}
                  />
                )}
              />
            </View>
          )}
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

  listContainer: {
    marginTop: 42,
    height: 400,
    paddingHorizontal: 32,
  },
});

export default MainScreen;

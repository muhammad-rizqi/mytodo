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
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => alert('Kembali')}>
            <Image source={require('../assets/arrow_back_24px_outlined.png')} />
          </TouchableOpacity>
          <Header />
          <View style={styles.main}>
            <Text style={styles.titleText}>
              Totam eius quia veritatis animi velit optio. Deleniti illo
              corporis facilis dicta provident repudiandae iure.
            </Text>
            <View style={styles.divider} />
            <Text style={styles.descriptionText}>
              Vel et unde dignissimos id expedita dolores exercitationem.
              Ratione recusandae ut quasi sapiente. Recusandae suscipit quidem
              illo aliquid. Aut libero et. Aut perspiciatis iste est. Et ea et
              dolorem explicabo distinctio odit repudiandae sint. Deserunt aut
              aliquid ut praesentium voluptas sed. Earum esse et libero
              veritatis repellat sit magni excepturi assumenda. Quisquam quia
              neque ea. Delectus veritatis consectetur ut sint illo esse
              pariatur cum. Laboriosam tenetur dicta eius. Excepturi voluptatem
              et autem cum fuga repudiandae neque ut. Expedita autem aliquid rem
              et. Iusto rerum libero. Minus quia quo aut deserunt nulla aut
              omnis ratione. Vel et unde dignissimos id expedita dolores
              exercitationem. Ratione recusandae ut quasi sapiente. Recusandae
              suscipit quidem illo aliquid. Aut libero et. Aut perspiciatis iste
              est. Et ea et dolorem explicabo distinctio odit repudiandae sint.
              Deserunt aut aliquid ut praesentium voluptas sed. Earum esse et
              libero veritatis repellat sit magni excepturi assumenda. Quisquam
              quia neque ea. Delectus veritatis consectetur ut sint illo esse
              pariatur cum. Laboriosam tenetur dicta eius. Excepturi voluptatem
              et autem cum fuga repudiandae neque ut. Expedita autem aliquid rem
              et. Iusto rerum libero. Minus quia quo aut deserunt nulla aut
              omnis ratione. Vel et unde dignissimos id expedita dolores
              exercitationem. Ratione recusandae ut quasi sapiente. Recusandae
              suscipit quidem illo aliquid. Aut libero et. Aut perspiciatis iste
              est. Et ea et dolorem explicabo distinctio odit repudiandae sint.
              Deserunt aut aliquid ut praesentium voluptas sed. Earum esse et
              libero veritatis repellat sit magni excepturi assumenda. Quisquam
              quia neque ea. Delectus veritatis consectetur ut sint illo esse
              pariatur cum. Laboriosam tenetur dicta eius. Excepturi voluptatem
              et autem cum fuga repudiandae neque ut. Expedita autem aliquid rem
              et. Iusto rerum libero. Minus quia quo aut deserunt nulla aut
              omnis ratione.
            </Text>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 32,
    flex: 7,
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

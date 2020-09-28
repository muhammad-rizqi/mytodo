import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AppScreen from './src/screen/AppScreen';
import DetailScreen from './src/screen/DetailScreen';
import SplashScreen from './src/screen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: true,
    };
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 3000);
  }

  render() {
    if (this.state.role) {
      return <SplashScreen />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={AppScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
export default App;

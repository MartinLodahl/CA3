import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Navigator = StackNavigator({
  Home: {screen: HomeScreen },
  Profile: {screen: ProfileScreen}
});


 export default class App extends React.Component {
  render() {
    return (
     <Navigator/>
    )
  }
} 

/* class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Hey</Text>
    </View>
    );
  }
} */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

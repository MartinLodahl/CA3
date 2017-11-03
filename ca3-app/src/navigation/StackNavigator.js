import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Navigator = StackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});


 export default class StackNavigat extends React.Component {
  render() {
    return (
     <Navigator/>
    )
  }
}
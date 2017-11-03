import React from 'react';
import {View,
        TouchableHighlight,
} from 'react-native';
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AddPlaceScreen from '../screen/AddPlaceScreen';


const Navigator = StackNavigator({
    Home: {screen: HomeScreen},
    Profile: { screen: ProfileScreen },
    AddPlace: { screen: AddPlaceScreen }
});


export default class StackNavigat extends React.Component {
    render() {
        return (
            <Navigator />
        )
    }
}
import React from 'react';
import {View,
        TouchableHighlight,
} from 'react-native';
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import AddPlaceScreen from '../screen/AddPlaceScreen';


const Navigator = StackNavigator({
    Home: {screen: HomeScreen},
    Detail: { screen: DetailScreen },
    AddPlace: { screen: AddPlaceScreen }
});


export default class StackNavigat extends React.Component {
    render() {
        return (
            <Navigator />
        )
    }
}
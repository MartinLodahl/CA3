import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'ProfileScreen',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
        <Text>ProfileScreen</Text>
      </View>
      );
    }
  }
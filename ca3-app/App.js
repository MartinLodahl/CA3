import React from 'react';
import StackNavigat from './src/navigation/StackNavigator';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

 export default class App extends React.Component {
  render() {
    return (
     <StackNavigat/>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

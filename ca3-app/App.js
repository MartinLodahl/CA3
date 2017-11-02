import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';

 export default class App extends React.Component {
  render() {
    return (
     <StackNavigator/>
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

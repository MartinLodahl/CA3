import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Rentel',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
       <ScrollView>
         <View> 
           
         </View>
       </ScrollView>

      );
    }
    /* <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        /> */
  }
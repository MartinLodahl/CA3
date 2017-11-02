import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import HuseMock from '../mock/HuseMock';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Rentel',
    };

    
      
    
    render() {
       const doubles = HuseMock.data.map((place)=> {
        return( <View key={place.id} style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center'}}>{place.id}</Text>
                <Text style={{textAlign: 'center'}}>{place.title}</Text>
                <Text style={{textAlign: 'center'}}>{place.description}</Text>
        </View>);
      }); 
      const { navigate } = this.props.navigation;
      return (
       <ScrollView> 
         {doubles}
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
         <Text>ProfileScreen</Text>
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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
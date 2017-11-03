import React from 'react';
import { StyleSheet, Text, View, Image,Dimensions ,ScrollView} from 'react-native';

export default class ProfileScreen extends React.Component {
    constructor(){
    super();
    this.state={switch:false}
    }
    static navigationOptions = {
      title: 'Place detail',
      headerTitleStyle: {
        /* this only styles the title/text (font, color etc.)  */
        color : '#000000',
        marginTop: 20,
        paddingTop:30,
        marginBottom:20,
        textAlign: 'center'
       }
    };
    
    render() {
      const {state} = this.props.navigation;
      const place = state.params.data;
      const Widdev = Dimensions.get('window').width;
      return (
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={{backgroundColor:"white"}}>
                <Text style={{paddingTop:30,fontSize: 25,paddingBottom:5}}>{place.title}</Text>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                  <Image style={{width: Widdev, height: 300}} source={{uri: place.img[1].url}}/>
                </View>
                <Text style={{textAlign: 'center'}}>{"Description: "+place.description}</Text>
                <Text style={{textAlign: 'center'}}>{"Street: "+place.address.street}</Text>
                <Text style={{textAlign: 'center'}}>{"Zip: "+place.address.zip}</Text>
                <Text style={{textAlign: 'center'}}>{"City: "+place.address.city}</Text>
      </View>
      </ScrollView>
      );
    }
  }
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import HuseMock from '../mock/HuseMock';
import StarRating from 'react-native-star-rating';
import placeFacade from "../fetch/PlaceFacade";
import locationFacade from "../fetch/LocationFacade";

export default class HomeScreen extends React.Component {

    constructor (){
      super();
      this.state = { data: [], err: ""}
    }
    static navigationOptions = {
      title: 'Rentel',
      
        headerTitleStyle: {
         /* this only styles the title/text (font, color etc.)  */
         color : '#000000',
         marginTop: 20,
         paddingTop:30,
         marginBottom:30,
         textAlign: 'center'
        }
      
    };

    componentWillMount() {
      /*
      This will fetch data each time you navigate to this route
      If only required once, add "logic" to determine when data should be "refetched"
      */
     /* placeFacade.getPlaceses((e, data) => {
        if (e) {
          return this.setState({ err: e.err })
        }
        this.setState({ err: "s", data });
      });*/

      locationFacade.getLocations((e, data) => {
        if (e) {
          return this.setState({ err: e.err })
        }
        this.setState({ err: "s", data });
      });
    }

  static navigationOptions = ({ navigation }) => {
    return (
      {
        title: 'Rentel',
        headerRight: <Button title="Add"
          onPress={() => {
            navigation.navigate('AddPlace')
          }} />,
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    
    //const doubles = this.state.data.map((place) => {
      const doubles = this.state.data.map((place) => {
      const Widdev = Dimensions.get('window').width;
      return (<View key={place.id} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "white", paddingBottom: 20 }}>

        <TouchableHighlight onPress={() =>
          navigate('Detail', { data: place })
        }>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            {img(place)}
           {/* <Image style={{ width: Widdev, height: 200 }} source={{ uri: place.images[0].url }} />*/}

          </View>
        </TouchableHighlight>
        <Text style={{ paddingTop: 5, fontWeight: 'bold' }}>{place.title}</Text>
        <View style={{ width: 25, height: 25, paddingTop: 5, flex: 1, flexDirection: 'row' }}>
          <StarRating disabled={false} maxStars={5} starSize={10} rating={place.rating.stars} />
          <Text style={{ fontSize: 7 }}>{" (" + place.rating.amount + ")"}</Text>
        </View>
      </View>
      );
    });
    return (
      <ScrollView>
        {doubles}
      </ScrollView>
    );
  }
}

const img = (location) => {
  const defaultImg = URL + 'api/photo/small/default.jpg';
  let $image = null;
  $image = (<img src={defaultImg} width='80' height='80' alt='nej' />);
  if (location.img.name) {
      $image = (<img src={URL + 'api/photo/small/' + location.img.name} width='80' height='80' alt='location' />);
  }
  return $image;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
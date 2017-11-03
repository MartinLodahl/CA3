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

export default class HomeScreen extends React.Component {
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

  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;
    const doubles = HuseMock.data.map((place) => {
      const Widdev = Dimensions.get('window').width;
      return (<View key={place.id} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "white", paddingBottom: 20 }}>

        <TouchableHighlight onPress={() =>
          navigate('Profile', { data: place })
        }>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            <Image style={{ width: Widdev, height: 200 }} source={{ uri: place.img[1].url }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
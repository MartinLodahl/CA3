import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    Image,Platform
} from 'react-native';
import HuseMock from '../mock/HuseMock';
import StarRating from 'react-native-star-rating';
import { ImagePicker,Location,Permissions,Constants } from 'expo';


export default class HomeScreen extends React.Component {

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
          } else {
            this.getKoordinat();
          }
      }

      getKoordinat = async () =>{
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log("permission not granted")
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        } 
        let location;
        if(Platform.OS === 'android'){
            
        } else {
        location = await Location.getCurrentPositionAsync();
        }
        console.log(location);
        this.setState({latitude: location.coords.latitude,
            longitude: location.coords.longitude});
            this.setState({location:location});
            this.getAddress();
            console.log(this.state.errorMessage);
        }

        getAddress = async () =>{
            let geocode = await Location.reverseGeocodeAsync(this.state.location.coords);
            this.setState({city: geocode[0].city});
            this.setState({zip: geocode[0].postalCode});
            this.setState({street: geocode[0].name});
            console.log(this.state.errorMessage);
            }

    static navigationOptions = ({ navigation }) => {
        return ({
            title: 'Add a House',
            headerRight: <Button title="Done"
                onPress={() => {
                    navigation.navigate('Home');
                }} />,
        });
    };

    constructor() {
        super(); this.state = {
            title: "",
            street: "",
            zip: "",
            city: "",
            description: "",
            image: null,
            stars: 0,
            amount: 0,
            latitude:0,longitude:0,
            location:null,
            errorMessage: null
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const windowWidth = Dimensions.get('window').width;
        const { image } = this.state;
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            title="Pick image"
                            onPress={this._pickImage}
                        />
                        {image &&
                            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        <Button
                            title="Upload"
                            onPress={() => {
                                this._uploadImage(image);
                            }}
                        />
                    </View>

                    <Text style={{textAlign: 'center'}}>{"Longitude: "+this.state.longitude}</Text>
                    <Text style={{textAlign: 'center'}}>{"Latitude: "+this.state.latitude}</Text>
                    <Text>Title</Text>
                    <TextInput
                        style={{ height: 40, margin: 'auto', borderColor: 'black', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ title: text })}
                        value={this.state.title}
                    />
                    <TextInput
                        style={{ height: 40, margin: 'auto', borderColor: 'black', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ street: text })}
                        value={this.state.street}
                    />
                    <Text>Zip</Text>
                    <TextInput
                        style={{ height: 40, margin: 'auto', borderColor: 'black', borderWidth: 1 }}
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ zip: text })}
                        value={this.state.zip}
                    />
                    <Text>City</Text>
                    <TextInput
                        style={{ height: 40, margin: 'auto', borderColor: 'black', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ city: text })}
                        value={this.state.city}
                    />
                    <Text>description</Text>
                    <TextInput
                        style={{ height: 180, margin: 'auto', borderColor: 'black', borderWidth: 1 }}
                        multiline={true}
                        onChangeText={(text) => this.setState({ description: text })}
                        value={this.state.description}
                    />
                </View>
            </ScrollView>
        );
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    

    _uploadImage = (uri) => {
        this.setState({ uploading: true });
        //Replace me with your ngrok forward url (each time you restart ngrok)
        let apiUrl = "http://alfen.me";
        const apiURL = apiUrl + "/Seed/api/registerPlace/file";
        let uriParts = uri.split('.');
        let fileType = uriParts[uriParts.length - 1];
        let fileName = uri.split('/').pop();
        let formData = new FormData();
        formData.append('file', {
            uri: uri,
            name: `photo.${fileName}`,
            type: `image/${fileType}`,
        });
        formData.append("user", "Mobile User (just to show it can be done)");

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        };
        return fetch(apiURL, options).
            then((res) => {
                let status = res.ok ? "Image uploaded successfully" : "Failed to upload image";
                this.setState({ status, uploading: false })
            }).catch((err) => {
                this.setState({ status: "Failed to upload image", uploading: false })
            });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    textfield: {
        height: 40, 
        margin: 'auto', 
        borderColor: 'red', 
        borderWidth: 1 
    }
});





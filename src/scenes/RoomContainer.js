import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  View } 
from 'react-native';

let {
  height,
  width,
} = Dimensions.get('window');

export default class App extends Component {

  renderUser(rowData){
    if(rowData.user === null){
      return 'https://facebook.github.io/react/img/logo_og.png'
    } else {
      return rowData.user.account.photos[0];
    }
  }


  render() {

    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{width: width-12, height: 150, borderRadius:4}}
            source={{uri: this.props.room.photos[0] }}/>
          <Text style={{fontFamily:'CircularAirPro-Book'}}>{this.props.room.title}</Text>
          <Text style={{fontFamily:'CircularAirPro-Light'}}>{this.props.room.description}</Text>  
          <Text>{"★".repeat(this.props.room.ratingValue)}</Text>
          <Image 
            style={{width:50,height:50,borderRadius:25}}
            source={{uri: this.props.room.user.account.photos[0]}}/>
        </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:70,
    padding:6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

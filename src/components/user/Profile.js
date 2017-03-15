import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

let {
  height,
  width,
} = Dimensions.get('window');


export default class Rating extends Component{
  render(){
    return(
      <View style={{marginTop:70}}>
          <Image 
            style={{height:250, width:width-6}}
            source={{uri: this.props.userPhoto}}/>
        <Text>
          {this.props.userName}
          {this.props.userDescription}
          {this.props.userRooms}
          {this.props.userFavorites}
        </Text>
      </View>
    )
  }
}
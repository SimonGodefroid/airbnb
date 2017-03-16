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


export default class UserPicture extends Component{
  render(){
    return(
      <View style={{marginTop:70}}>
          <Image 
            style={{height:250, width:width-6}}
            source={{uri: this.props.userPhoto}}/>
        <Text>
          UserName:{this.props.userName}
          Description:{this.props.userDescription}
          Rooms:{this.props.userRooms}
          Favorites:{this.props.userFavorites}
        </Text>
      </View>
    )
  }
}
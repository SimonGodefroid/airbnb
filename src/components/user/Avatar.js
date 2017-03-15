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

export default class Avatar extends Component{

  render(){
    console.log('Avatar',this.props);
    return(
      <View style={{flexDirection:'row',}}>
        <Image 
          style={{width:50,height:50,borderRadius:25}}
          source={{uri: this.props.userPhoto}}/>
        <Text>
          {this.props.userName}
        </Text>
      </View>
    )
  }
}

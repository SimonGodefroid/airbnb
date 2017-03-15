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
    return(
      <View style={{flexDirection:'row',flex:1}}>
        <Image 
          style={{width:50,height:50,borderRadius:25}}
          source={{uri: this.props.user.account.photos[0]}}/>
        <Text>
          {this.props.user.account.username}
        </Text>
      </View>
    )
  }
}

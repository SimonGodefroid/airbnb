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
    
    console.log("Avatar$this.props.user.photos[0]",this.props.user.account.photos[0]);
    return(
      <Image 
        style={{width:50,height:50,borderRadius:25}}
        source={{uri: this.props.user.account.photos[0]}}/>
    )
  }
}

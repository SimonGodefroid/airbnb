import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  } 
from 'react-native';  


import Title from './Title';

let {
  height,
  width,
} = Dimensions.get('window');


const styles = StyleSheet.create({
  image: {
    width: width-12,
    height: 90,
    borderRadius:4
  }
});

export default class RoomFlash extends Component{

  render(){
  return(
    <View>
      <Image 
        style={styles.image}
        source={{uri: this.props.photos}}/>
      <Title 
        title={this.props.title}/>
    </View>
  )
  }
}
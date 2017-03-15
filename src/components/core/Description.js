import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  } 
from 'react-native';  


const styles = StyleSheet.create({
  star:{
    color: '#f2d637'
  },
  staro:{
    color: '#ddd'
  }
});



export default class Description extends Component{

  render(){
  return(
    <View>
      <Text>
        {this.props.user.description}
        {this.props.user.room.description}
      </Text>
    </View>
  )
  }
}
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



export default class Title extends Component{

  render(){
  return(
    <View>
      <Text>
        {this.props.title}
      </Text>
    </View>
  )
  }
}
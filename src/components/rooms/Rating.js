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



export default class Rating extends Component{

  render(){
  return(
    <View style={{flexDirection:'row'}}>
      <Text style={styles.star}>
        {"★".repeat(this.props.ratingValue)}
      </Text>
      <Text style={styles.staro}>
        {"★".repeat(5-this.props.ratingValue)}
      </Text>
    </View>
  )
  }
}
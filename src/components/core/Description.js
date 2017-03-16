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

  constructor(props){
    super(props)
    this.state = {
      numberOfLinesNum:3
    }
  }

  render(){
  return(
    <View>
      <Text 
        style={{fontFamily:'CircularAirPro-Light'}}
        numberOfLines={this.state.numberOfLinesNum}
        onPress={()=>this.setState({numberOfLinesNum:10})}>
        {this.props.description}
      </Text>
    </View>
  )
  }
}
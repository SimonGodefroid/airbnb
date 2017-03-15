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

import Avatar from '../user/Avatar';
import Rating from '../rooms/Rating';


// pour récupérer la height et la width du device via Dimensions.
// const dim = Dimensions.get('window');
// const width = dim.width;
// const height = dim.height;

let {
  height,
  width,
} = Dimensions.get('window');   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
    padding:6
  },
  card:{
    paddingTop:4,
    paddingBottom:4,
    position:'relative'
  },
    image: {
      width: width-12,
      height: 150,
      borderRadius:4
    },
    title:{
      fontFamily:'CircularAirPro-Book',
      paddingTop:4
    },
    description: {
      fontFamily:'CircularAirPro-Light'
    },
    label:{
      fontFamily:'CircularAirPro-Light',
      position:'absolute',
      top:100,padding:2,
      backgroundColor:'black',
      color:'white'
    }
  });


export default class Card extends Component{
  render(){
    return(
      <View
        style={styles.card}>
        <Image
          style={styles.image}
          source={{uri: this.props.photos[0] }}/>
        <Text 
          style={styles.title}>
            {this.props.title}</Text>
        <Text 
          style={styles.label}>
            {this.props.price}€</Text>  
        <Rating 
          ratingValue={this.props.ratingValue}/>
         <Avatar
          userPhoto={this.props.userPhoto}
          userName={this.props.userName}/>
      </View>
    )
  }
}
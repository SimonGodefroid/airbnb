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
import Reviews from '../rooms/Reviews';
import Title from '../rooms/Title';


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
    marginTop:10,
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
        <Title 
          style={styles.title}
          title={this.props.title}/>
        <Text 
          style={styles.label}>
            {this.props.price}€</Text>  
        <Rating 
          ratingValue={this.props.ratingValue}/>
        <Reviews 
          reviews={this.props.reviews}/>
      </View>
    )
  }
}
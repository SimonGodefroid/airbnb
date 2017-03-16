import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import Description from '../core/Description';

let {
  height,
  width,
} = Dimensions.get('window');

export default class Profile extends Component{

  constructor(props){
    super(props);
    this.state={
      favorites:this.props.userFavorites,
    }
    console.log('Constructor', typeof this.props.userFavorites);
  }


  componentDidMount(){
    this.getRoom();  
  }
  
  getRoom(){
      fetch('http://localhost:3001/api/room/58c91b1a71cf104be9fec362')
      .then(res=>res.json())
      .then(json=>{
        console.log('Profile#getRoom#fetch$json',json);
      })
    }







  render(){
    return(
      <View style={{marginTop:70}}>
          <Image 
            style={{height:250, width:width-6}}
            source={{uri: this.props.userPhoto}}/>
        <Text>
          UserName:{this.props.userName}
          Rooms:{this.props.userRooms}
          Favorites:{this.props.userFavorites}
        </Text>
        <Description 
          description={this.props.userDescription}/>
      </View>
    )
  }
}
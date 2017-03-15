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
import Rating from '../components/rooms/Rating';
import MapRoom from '../components/rooms/MapRoom';
import Avatar from '../components/user/Avatar';
import { Actions } from 'react-native-router-flux';


let {
  height,
  width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:70,
    padding:6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    height:200,
    width:width,
  }
});


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numberOfLinesNum:3
    }
  }

  render() {
    console.log('user name',this.props.room.user.account.username);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{width: width-12, height: 150, borderRadius:4}}
            source={{uri: this.props.room.photos[0] }}/>
          <Text 
            style={{fontFamily:'CircularAirPro-Book'}}>
            {this.props.room.title}
          </Text>
          <TouchableOpacity 
            onPress={()=>this.setState({numberOfLinesNum:5})}>
            <Text 
              style={{fontFamily:'CircularAirPro-Light'}}
              numberOfLines={this.state.numberOfLinesNum}>
              {this.props.room.description}
            </Text>  
          </TouchableOpacity>
          <Rating 
            ratingValue={this.props.room.ratingValue}/>
          <TouchableOpacity onPress={() => Actions.profile({user:this.props.room.user})}>
            <Avatar 
              userPhoto={this.props.room.user.account.photos[0]}
              userName={this.props.room.user.account.username}/>
          </TouchableOpacity>
        </View>
        <View>
          <MapRoom 
            style={styles.map}
            roomLat={this.props.room.loc[0]}
            roomLong={this.props.room.loc[1]}
            roomTitle={this.props.room.title}
            />
        </View>
      </ScrollView>
    );
  }
}


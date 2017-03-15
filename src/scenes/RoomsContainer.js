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

import { Actions } from 'react-native-router-flux';
import Card from '../components/rooms/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
    padding:6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loading:{
    marginTop:30
  }
});



export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    rooms:[],
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
  }
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount(){
    this.getRooms();
  }

  getRooms(){
    fetch('http://localhost:3001/api/room?city=paris')
    .then(res=>res.json())
    .then(json=>{
      console.log('App#fetch$json',json);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.rooms),
        rooms:json.rooms
      });
    });
  } 

  renderRow(rowData){
    return(
      <TouchableOpacity onPress={() => Actions.room({room:rowData})}>
        <Card 
          photos={rowData.photos}
          title={rowData.title}
          description={rowData.description}
          price={rowData.price}
          ratingValue={rowData.ratingValue}
          user={rowData.user}
          price={rowData.price}/>
      </TouchableOpacity>
    )
  }

  render() {
    if(this.state.rooms.length<0){
      return(
        <Text 
          style={styles.loading}>
          Chargement...
        </Text>
        )
    }
    return (
      <View 
        style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
    );
  }
}
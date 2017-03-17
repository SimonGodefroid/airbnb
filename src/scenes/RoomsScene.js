import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
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
import Avatar from '../components/user/Avatar';
import Reviews from '../components/rooms/Reviews';
import Api from '../containers/core/Api';


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



// ici on passe à la fonction Api.getRooms(ville,callback)
  componentDidMount(){
    Api.getRooms('paris',(json) => {
      console.log('App#fetch$json',json);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.rooms),
        rooms:json.rooms
      });
    });
  }


// correction
  /*
  constructor(props){
    super(props);

    this.state ={
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1,r2)=>r1!==r2,
      });
    };
  }


  componentDidMount(){
    Api.getRooms(rooms=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(rooms.rooms)
      });
    }

// promise based
    Api.getRooms()
      .then((rooms)=>{
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(rooms.rooms)
        })
      });

      const rooms = await Api.getRooms();
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(rooms.rooms)
      })
  }


  
    




  render(){
    if(this.state.dataSource.getRowCount()==0){
      return(
        <View style={styles.container}>
          <Text>Chargement ...</Text>
        </View>
      );
    }
    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
    )
  }



  */



  renderRow(rowData){
    return(
      <TouchableOpacity onPress={() => Actions.room({room:rowData})}>
      <View style={{position:'relative'}}>
        <Card 
          photos={rowData.photos}
          title={rowData.title}
          description={rowData.description}
          price={rowData.price}
          ratingValue={rowData.ratingValue}
          user={rowData.user}
          price={rowData.price}
          reviews={rowData.reviews}/>
      </View>
      <View style={{position:'absolute',bottom:20, right:20}}>
        <Avatar          
          userPhoto={rowData.user.account.photos[0]}/>
      </View>
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
          <Button
            title="Disconnect"
            onPress={()=>Api.logOut()}
            color="#841584"/>
      </View>
    );
  }
}
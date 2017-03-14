import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  Image,
  View } 
from 'react-native';

export default class App extends Component {


constructor(props){
  super(props);
  this.state={
    rooms:[],
    _id:'',
    shortId:'',
    title:'',
    description:'',
    price:'',
    ratingValue:'',
    reviews:'',
    loc:'',
    user:'',
    city:'',
    photos:'',
    dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
  };
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
      dataSource: this.state.dataSource.cloneWithRows(json.rooms)
    });
  });
}

  renderUser(){
    if(this.rowData.user.account === null){
      return 'https://facebook.github.io/react/img/logo_og.png'
    } else {
      return this.rowData.user.account.photos[0];
    }

  }


  render() {
    
    if(this.state.rooms.length<0){
      return(<Text style={{marginTop:30}}>Chargement...</Text>)
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>
            <Text>{rowData.title}</Text>
            <Text>{rowData.description}</Text>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: rowData.photos[0] }}/>
            <Text>{rowData.ratingValue} stars</Text>
            <Text>{this.renderUser()}</Text>
            
          </View>
      } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

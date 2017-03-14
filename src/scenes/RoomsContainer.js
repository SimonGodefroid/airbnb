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

  renderUser(rowData){
    if(rowData.user === null){
      return 'https://facebook.github.io/react/img/logo_og.png'
    } else {
      return rowData.user.account.photos[0];
    }
  }


  render() {
    
    if(this.state.rooms.length<0){
      return(<Text style={{marginTop:30}}>Chargement...</Text>)
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <View>
            <Text style={{fontFamily:'CircularAirPro-Book'}}>{rowData.title}</Text>
            <Text style={{fontFamily:'CircularAirPro-Light'}}>{rowData.description}</Text>
            <Image
              style={{width: 150, height: 150, borderRadius:4}}
              source={{uri: rowData.photos[0] }}/>
            <Text>{rowData.ratingValue} stars</Text>
            <Image 
              style={{width:50,height:50,borderRadius:25}}
              source={{uri: this.renderUser(rowData)}}/>
          </View>
      } />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:70
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

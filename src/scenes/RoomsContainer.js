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

// pour récupérer la height et la width du device via Dimensions.
let {
  height,
  width,
} = Dimensions.get('window');

// const dim = Dimensions.get('window');
// const width = dim.width;
// const height = dim.height;



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
  }
    this.renderUser = this.renderUser.bind(this);
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

  renderUser(rowData){
    if(rowData.user === null){
      return 'https://facebook.github.io/react/img/logo_og.png'
    } else {
      return rowData.user.account.photos[0];
    }
  }

  renderRow(rowData){
    console.log("renderRow");
    console.log("rowData",rowData);
    return(
          <TouchableOpacity onPress={() => Actions.room({room:rowData})}>
            <View
              style={{paddingTop:4, paddingBottom:4,position:'relative'}}>
              <Image
                style={{width: width-12, height: 150, borderRadius:4}}
                source={{uri: rowData.photos[0] }}/>
              <Text 
                style={{fontFamily:'CircularAirPro-Book',paddingTop:4}}>{rowData.title}</Text>
              <Text 
                style={{fontFamily:'CircularAirPro-Light'}}>{rowData.description}</Text>  
              <Text 
                style={{fontFamily:'CircularAirPro-Light',position:'absolute',top:100,padding:2,backgroundColor:'black',color:'white'}}>{rowData.price}€</Text>  
              <Text 
                style={{color:'#f2d637', fontSize:20}}>{"★".repeat(rowData.ratingValue)}{"☆".repeat(5-rowData.ratingValue)}</Text>
              <Image 
                style={{width:50,height:50,borderRadius:25}}
                source={{uri: this.renderUser(rowData)}}/>
            </View>
          </TouchableOpacity>
    )
  }


  render() {
    
    if(this.state.rooms.length<0){
      return(<Text style={{marginTop:30}}>Chargement...</Text>)
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
    </View>
    );
  }
}

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
});

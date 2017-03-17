import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import RoomFlash from '../rooms/RoomFlash.js';
import Description from '../core/Description';
import Api from '../../containers/core/Api';

let {
  height,
  width,
} = Dimensions.get('window');

export default class Profile extends Component{

  constructor(props){
    super(props);
    this.state={
      userProfile:{},
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }


  componentDidMount(){
    Api.getProfile(this.props.userId,(json)=>{
      console.log('App#fetch$json',json);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json),
        user:json
      })
    })
  }
  


  renderFavorites(rowData){
    return(
      <ScrollView>
      <TouchableOpacity onPress={() => {
        console.log(rowData);
        Actions.room({room:rowData})}
      }>
        <View style={{position:'relative'}}>
        {console.log('profile rowData',rowData)}
          <RoomFlash
            photos={rowData.photos[0]}
            title={rowData.title}/>
        </View>
      </TouchableOpacity>
      </ScrollView>
    )
  }

  render(){
    if(Object.keys(this.state.userProfile).length<0){
      return(
        <Text 
          style={styles.loading}>
          Chargement...
        </Text>
        )
    }
    return(
      <View style={{marginTop:70}}>
        <Image 
          style={{height:70, width:width-6}}
          source={{uri: this.props.userPhoto}}/>
        <Text>
          UserName:{this.props.userName}
          Rooms:{this.props.userRooms}
          Favorites:{this.props.userFavorites}
        </Text>
        <Description 
          description={this.props.userDescription}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderFavorites}/>
      </View>
    )
  }
}
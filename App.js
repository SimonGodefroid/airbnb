import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import Store from 'react-native-simple-store';
import Api from './src/containers/core/Api';
import HomeScene from './src/scenes/HomeScene';
import AboutScene from './src/scenes/AboutScene';
import RoomsScene from './src/scenes/RoomsScene';
import RoomScene from './src/scenes/RoomScene';
import ProfileScene from './src/scenes/ProfileScene';
import LoginScene from './src/scenes/LoginScene';

import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: {},
      isUserChecked:false
    };
  }

  componentDidMount(){ //expliquer
    console.log('compDidM isUserChecked',this.state.isUserChecked);
    console.log('compDidM isUserLoggedIn',this.state.isUserLoggedIn);
    Store.get('user').then((userStore)=>{
      console.log('componentdidmountuserStore',userStore);
      const user = userStore||{};
      if(user._id){
        Api.setUser(user);
        this.setState({
          user:user,
          isUserChecked:true
        });
      }else{
        this.setState({
          isUserChecked:true
        });
      }
    });
  }

  render(){
    console.log('App Render isUserChecked',this.state.isUserChecked);
    const isUserLoggedIn = Object.keys(this.state.user).length!==0;
    console.log('App Render isUserLoggedIn',isUserLoggedIn);
    if(this.state.isUserChecked===false){
      return(
        <View>
          <Text>
            Chargement...
          </Text>
        </View>
      )
    } 
    return(
        <Router 
          navigationBarStyle={{backgroundColor:'#FF5A5F'}} 
          titleStyle={{color:'white'}} 
          backButtonTextStyle={{color:'white'}}>
          <Scene
            key={'tab'}
            tabs
            type={'replace'}>
             <Scene
              key={'login'}
              title={'Login'}
              component={LoginScene}
              initial={isUserLoggedIn ? false : true}
              icon={(props) =>
                <Icon
                  name={'md-play'}
                  color={props.selected ? '#AAA' : '#000' }/>}
            />
            <Scene
              key={'rooms'}
              title={'Rooms'}
              component={RoomsScene}
              initial={isUserLoggedIn ? true : false}
              icon={(props) =>
                <Icon
                  name={'md-star'}
                  color={props.selected ? '#AAA' : '#000' }/>}
            />
          </Scene>
            <Scene key={'room'} title={'Room'} component={RoomScene}/>
            <Scene key={'profile'} title={'Profile'} component={ProfileScene}/>
          
        </Router>
      )
    }
  }

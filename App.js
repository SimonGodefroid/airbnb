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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:undefined,
    };
    this.onLoginChangeUserState=this.onLoginChangeUserState.bind(this);
  }
  componentWillMount(){
    console.log('App#compowillmount#user',Store.get('user'));   
    Store.get('user').then((user)=>{
      this.setState({
        user:user
      });
      if(user){
        Api.setUser(user); // sert stocker l'utilisateur
      }
    });
  }

  onLoginChangeUserState(user){
    this.setState({
      user:user
    })
    console.log("onLoginChangeUserState",this.state.user);
  }

  render() {
    if(this.state.user===undefined){
      return(
        <View>
          <Text>
            Chargement...
          </Text>
        </View>
      )
    } else if (this.state.user){
      return (
        <Router
          navigationBarStyle={{backgroundColor:'#FF5A5F'}}
          titleStyle={{color:'white'}}
          backButtonTextStyle={{color:'white'}}>
          <Scene
            key={'home'} 
            title={'Accueil'} 
            component={HomeScene}/>
          <Scene 
            key={'rooms'}
            title={'Rooms'}
            component={RoomsScene}
            initial={true}/>
          <Scene 
            key={'room'}
            title={'Room'}
            component={RoomScene}/>
          <Scene 
            key={'profile'}
            title={'Profile'}
            component={ProfileScene}/>
          <Scene 
            key={'about'}
            title={'About'}
            component={AboutScene}/>
        </Router>
      );
    }else{
            return (
        <Router
          navigationBarStyle={{backgroundColor:'#FF5A5F'}}
          titleStyle={{color:'white'}}
          backButtonTextStyle={{color:'white'}}>
          <Scene 
            key={'login'}
            title={'Login'}
            component={LoginScene}
            onLoginChangeUserStateFn={this.onLoginChangeUserState}
            initial={true}/>
          <Scene
            key={'home'} 
            title={'Accueil'} 
            component={HomeScene}/>
          <Scene 
            key={'about'}
            title={'About'}
            component={AboutScene}/>
        </Router>
      );
    }
  }
}

export default App;



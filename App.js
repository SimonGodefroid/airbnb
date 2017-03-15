import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import HomeScene from './src/scenes/HomeScene';
import AboutScene from './src/scenes/AboutScene';
import RoomsScene from './src/scenes/RoomsScene';
import RoomScene from './src/scenes/RoomScene';
import ProfileScene from './src/scenes/ProfileScene';

class App extends React.Component {
  render() {
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
  }
}

export default App;



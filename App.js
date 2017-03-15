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
import RoomsContainer from './src/scenes/RoomsContainer';
import RoomContainer from './src/scenes/RoomContainer';


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
          component={RoomsContainer}
          initial={true}
          />

        <Scene key={'room'} title={'Room'} component={RoomContainer} backButtonTextStyle={{color:'white'}}/>
        <Scene key={'about'} title={'About'} component={AboutScene} />
      </Router>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    
  },
});


// TODOs 
// créer un composant card
// créer un composant avatar
// 
// 

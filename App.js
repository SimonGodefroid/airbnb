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


class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'home'} title={'Accueil'} component={HomeScene} />
        <Scene key={'rooms'} title={'Rooms'} component={RoomsContainer} initial={true} />
        <Scene key={'about'} title={'About'} component={AboutScene} />
      </Router>
    );
  }
}

export default App;
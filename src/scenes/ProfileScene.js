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

import Profile from '../components/user/Profile';

export default class ProfileScene extends Component {
  render() {
    return (
      <Profile
        userName={this.props.user.account.username}
        userPhoto={this.props.user.account.photos[0]}
        userDescription={this.props.user.account.description}
        userRooms={this.props.user.account.rooms}
        userFavorites={this.props.user.account.favorites[0]}/>
    );
  }
}

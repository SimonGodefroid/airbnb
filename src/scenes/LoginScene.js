import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Image,
  Dimensions,
  View } 
from 'react-native';

import { Actions } from 'react-native-router-flux';
import Api from '../containers/core/Api';


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
  loading:{
    marginTop:30
  }
});


export default class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'carine@airbnb-api.com',
      password: 'password01',
    }
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onSubmit(){
    console.log('OnSubmit')
    Api.logIn({
        email:this.state.email,
        password:this.state.password,
      },
      (json)=>{      
        Actions.rooms({type:'replace'});
       }
    );
  }


  onChangeEmail(email){
    this.setState({
      email:email,
    });
    console.log('email',email);
    console.log("onChangeEmail",this.state.email);
  }

  onChangePassword(password){
    this.setState({
      password:password,
    });
    console.log('password',password);
    console.log("onChangePassword",this.state.password);
  }


  render() {
    console.log('this.state.email',this.state.email);
    return (
      <View 
        style={styles.container}>
        <Text>Login Scene + un joli logo</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          value={this.state.email}
          onChangeText={this.onChangeEmail}/>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'password'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          value={this.state.password}
          onChangeText={this.onChangePassword}/>
        <Button
          onPress={this.onSubmit}
          title="Login"
          color="#841584"/>
      </View>
    );
  }
}
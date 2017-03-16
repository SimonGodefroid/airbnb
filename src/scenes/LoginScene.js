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
      email:'me@email.com',
      password: 'mypassword',
    }
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onSubmit(){
    Api.logIn({
        email:this.state.email,
        password:this.state.password,
      },
      (json)=>{
        console.log(json)
        this.props.onLoginChangeUserStateFn(json);
       }
    );
  }

// onSubmit(){
//   Api.logIn(
//     {
//       email:this.state.email,
//       password:this.state.password
//     },
//     (json)=>{
//       console.log(json); // callback qui affiche la réponse du fetch qui est un json.
//       browserHistory.push('/');
//       alert('Bienvenue !');
//     }
//   );


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
          onChangeText={this.onChangeEmail}/>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={'password'}
          keyboardType={'default'}
          autoCapitalize={'none'}
          onChangeText={this.onChangePassword}/>
        <Button
          onPress={this.onSubmit}
          title="Login"
          color="#841584"/>
      </View>
    );
  }
}
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

class AboutScene extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text>
          About
        </Text>
        <Text>
          Hello {this.props.name}!
        </Text>
      </View>
    );
  }
}

export default AboutScene;

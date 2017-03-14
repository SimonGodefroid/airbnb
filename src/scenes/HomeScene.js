import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class HomeScene extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text>
          Home
        </Text>
        <Button
          title={'Go to About scene'}
          onPress={() => Actions.about({ name: 'Peter' }) /* envoie de props Actions.<key>(props) */} />
      </View>
    );
  }
}

export default HomeScene;
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default class Cart extends Component {
  handleHome = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
        <Button title="Home" onPress={this.handleHome} />
      </View>
    );
  }
}

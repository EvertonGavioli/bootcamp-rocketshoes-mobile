import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  handleCart = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="Cart" onPress={this.handleCart} />
      </View>
    );
  }
}

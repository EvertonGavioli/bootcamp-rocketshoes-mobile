import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  componentDidMount() {}

  render() {
    const data = [
      {
        id: 1,
        title: 'a',
      },
      {
        id: 2,
        title: 'b',
      },
    ];

    return (
      <Container>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ProductImage
                source={{
                  uri:
                    'https://static.netshoes.com.br/produtos/tenis-olympikus-vibration-masculino/79/D22-1997-879/D22-1997-879_detalhe2.jpg?ims=326x',
                }}
              />
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$179,90</ProductPrice>

              <AddButton>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <ProductAmountText>3</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

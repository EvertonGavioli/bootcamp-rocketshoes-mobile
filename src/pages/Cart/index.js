import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../styles/colors';

import {
  Container,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

export default class Cart extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/12/D12-9660-112/D12-9660-112_detalhe2.jpg?ims=326x',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis de Caminhada Leve Confortavel</ProductTitle>
              <ProductPrice>R$179,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color={color.primary} />
            </ProductDelete>
          </ProductInfo>

          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={color.primary}
              />
            </ProductControlButton>

            <ProductAmount />

            <ProductControlButton>
              <Icon name="add-circle-outline" size={20} color={color.primary} />
            </ProductControlButton>

            <ProductSubtotal>R$539,70</ProductSubtotal>
          </ProductControls>
        </Product>

        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$1690,10</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </Container>
    );
  }
}

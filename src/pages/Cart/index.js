import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../../styles/colors';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.map(product => (
        <Product key={product.id}>
          <ProductInfo>
            <ProductImage source={{ uri: product.image }} alt={product.title} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.priceFormatted}</ProductPrice>
            </ProductDetails>
            <ProductDelete onPress={() => removeFromCart(product.id)}>
              <Icon name="delete-forever" size={24} color={color.primary} />
            </ProductDelete>
          </ProductInfo>

          <ProductControls>
            <ProductControlButton onPress={() => decrement(product)}>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={color.primary}
              />
            </ProductControlButton>

            <ProductAmount value={String(product.amount)} />

            <ProductControlButton onPress={() => increment(product)}>
              <Icon name="add-circle-outline" size={20} color={color.primary} />
            </ProductControlButton>

            <ProductSubtotal>R$539,70</ProductSubtotal>
          </ProductControls>
        </Product>
      ))}

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

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

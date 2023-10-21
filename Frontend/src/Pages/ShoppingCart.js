import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  background: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CartItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const CartItem = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const CartItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CartItemPrice = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <Container>
            <Title>Your Shopping Cart</Title>
            <CartItems>
                {cart.items.map((item) => (
                    <CartItem key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <CartItemTitle>{item.title}</CartItemTitle>
                        <CartItemPrice>$ {item.price}</CartItemPrice>
                    </CartItem>
                ))}
            </CartItems>
            <TotalAmount>
                <span>Total:</span>
                <span>$ {cart.total}</span>
            </TotalAmount>
            <CheckoutButton>Checkout</CheckoutButton>
        </Container>
    );
};

export default ShoppingCart;

import React, { useState, useEffect } from 'react';
import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';
import StripeCheckout from 'react-stripe-checkout';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);
  const [isCartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong> ${cartAmount}
        <StripeCheckout
          name="E-commerce App"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency="USD"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey="pk_test_CoRcXokk0XqGmFxbJj0PLGgC00Nl9uuJMf"
          token={handleCheckout}
          triggerEvent="onClick"
        >
          <Button
            icon="cart"
            disabled={isCartEmpty || success}
            color="teal"
            floated="right"
            content="Checkout"
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;

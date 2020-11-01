import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripeButton.style.scss';

const onToken = (token) => {
    console.log(token)
}

const StripeCheckoutButton = ({ price }) => {
    const stripeAmount = price * 100;
    const stripePublishableKey = "pk_test_51HiMN9HZVSKxZDVFfIvnpjyaQHXeL60JKVjqSw5GACG7e8lhyxlFfu4BN18xJsv1Fv2LZFCavklNBmS7ndREosVi00juY8EJ4Y";

    return (
        <StripeCheckout
            label="Pay now"
            name="My Clothing"
            billingAddress
            shippingAddress
            image=""
            description={ `Your total is ${ price }` }
            amount={ stripeAmount }
            panelLabel="Pay Now"
            token={ onToken }
            stripeKey={ stripePublishableKey }
        />
    )
}

export default StripeCheckoutButton;
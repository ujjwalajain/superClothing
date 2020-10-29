import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../../redux/cart/cart.actions';

import './checkoutItem.style.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className="checkoutItem">
            <div className="imageContainer">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">{ quantity }</span>
            <span className="price">{ price }</span>
            <span className="removeButton" onClick={ () => removeItem(cartItem) }>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: (cartItem) => dispatch(removeItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
import React from 'react';
import { connect } from 'react-redux';

import { addItems, clearItemFromCart, removeItem, removeItemFromCart } from '../../redux/cart/cart.actions';

import './checkoutItem.style.scss';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <div className="checkoutItem">
            <div className="imageContainer">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <span className="arrow" onClick={ () => removeItem(cartItem) }>&#10094;</span>
                <span className="value">{ quantity }</span>
                <span className="arrow" onClick={ () => addItem(cartItem) }>&#10095;</span>
            </span>
            <span className="price">{ price }</span>
            <span className="removeButton" onClick={ () => clearItem(cartItem) }>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    addItem: cartItem => dispatch(addItems(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
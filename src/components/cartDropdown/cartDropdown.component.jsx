import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../controls/customButton/customButton.component';
import CartItem from '../cartItem/cartItem.component';

import './cartDropdown.style.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cartDropdown">
        <div className="cartItems">
            {
                cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={ cartItem } />
                ))
            }
        </div>
        <CustomButton >Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);
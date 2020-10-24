import React from 'react';

import CustomButton from '../controls/customButton/customButton.component';

import './cartDropdown.style.scss';

const CartDropdown = () => (
    <div className="cartDropdown">
        <div className="cartItems"></div>
        <CustomButton >Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown;
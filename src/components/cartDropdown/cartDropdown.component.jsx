import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../controls/customButton/customButton.component';
import CartItem from '../cartItem/cartItem.component';
import { SelectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cartDropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cartDropdown">
        <div className="cartItems">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={ cartItem.id } item={ cartItem } />
                    ))
                    : <span className="emptyMessage">Your cart is empty.</span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
        }>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: SelectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../controls/customButton/customButton.component';
import CartItem from '../cartItem/cartItem.component';
import { SelectCartItems } from '../../redux/cart/cart.selectors';

import './cartDropdown.style.scss';

const CartDropdown = ({ cartItems, history }) => (
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
        <CustomButton onClick={ () => history.push('/checkout') }>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: SelectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
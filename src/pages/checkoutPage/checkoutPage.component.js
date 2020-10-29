import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import { SelectCartItems, SelectCartTotal } from '../../redux/cart/cart.selectors';

import './checkoutPage.style.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkoutPage">
        <div className="checkoutHeader">
            <div className="headerBlock">
                <span>Product</span>
            </div>
            <div className="headerBlock">
                <span>Description</span>
            </div>
            <div className="headerBlock">
                <span>Quantity</span>
            </div>
            <div className="headerBlock">
                <span>Price</span>
            </div>
            <div className="headerBlock">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
            ))
        }
        <div className="cartTotal">
            <span>TOTAL: ${ cartTotal }</span>
        </div>
    </div>)

const mapStateToProps = createStructuredSelector({
    cartItems: SelectCartItems,
    cartTotal: SelectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
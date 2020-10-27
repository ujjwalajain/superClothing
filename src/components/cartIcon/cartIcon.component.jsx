import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.style.scss';

const CartIcon = ({ toggleCartHidden, cartQuantity }) => (
    <div className="cartIcon">
        <ShoppingIcon className="shoppingIcon" onClick={ toggleCartHidden } />
        <span className="itemCount">{ cartQuantity }</span>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartQuantity: cartItems.reduce(
        (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
        0
    )
})
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
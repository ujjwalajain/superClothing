import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { SelectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.style.scss';

const CartIcon = ({ toggleCartHidden, cartQuantity }) => (
    <div className="cartIcon">
        <ShoppingIcon className="shoppingIcon" onClick={ toggleCartHidden } />
        <span className="itemCount">{ cartQuantity }</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartQuantity: SelectCartItemsCount
})
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
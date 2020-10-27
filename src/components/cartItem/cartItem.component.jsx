import React from 'react';

import './cartItem.style.scss';

const CartItem = ({ item: { name, quantity, price, imageUrl } }) => (
    <div className="cartItem">
        <img className="cartItemImage" src={ imageUrl } alt="item" />
        <div className="itemDetails">
            <span className="name">{ name }</span>
            <span className="price">
                { quantity } X ${ price }
            </span>
        </div>
    </div>
)

export default CartItem;
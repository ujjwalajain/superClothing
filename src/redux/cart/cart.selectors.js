import { createSelector } from 'reselect';

export const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
)

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce(
        (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
        0
    )
)


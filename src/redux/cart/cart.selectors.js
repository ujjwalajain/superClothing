import { createSelector } from 'reselect';

export const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
)

export const SelectCartHideen = createSelector(
    [SelectCart],
    cart => cart.hidden
)

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce(
        (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
        0
    )
)

export const SelectCartTotal = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce(
        (totalQuantity, cartItem) => totalQuantity + (cartItem.quantity * cartItem.price),
        0
    )
)


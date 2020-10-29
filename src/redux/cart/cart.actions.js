import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItems = (items) => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: items
})

export const removeItemFromCart = (cartItem) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: cartItem
})
import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItems = (items) => ({
    type: CartActionTypes.ADD_ITEMS,
    payload: items
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (cartItem) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: cartItem
})
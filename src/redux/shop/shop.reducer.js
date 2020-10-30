import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collection: SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default ShopReducer;
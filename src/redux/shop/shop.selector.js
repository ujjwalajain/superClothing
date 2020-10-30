import { createSelector } from 'reselect';

const SelectShop = state => state.shop;

export const SelectCollection = createSelector(
    [SelectShop],
    shop => shop.collection
);
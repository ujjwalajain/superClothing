import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const SelectShop = state => state.shop;

export const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
);

export const SelectCollectionForPreview = createSelector(
    [SelectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const SelectCollection = collectionUrlParam =>
    createSelector(
        [SelectCollections],
        collections => collections[collectionUrlParam]
    );
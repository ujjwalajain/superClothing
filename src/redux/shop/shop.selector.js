import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5
}

const SelectShop = state => state.shop;

export const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections
);

export const SelectCollection = collectionUrlParam =>
    createSelector(
        [SelectCollections],
        collections =>
            collections.find(collection =>
                collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    );
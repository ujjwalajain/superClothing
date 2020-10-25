import React from 'react';

import CustomButton from '../controls/customButton/customButton.component';

import './collectionItem.style.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collectionItem">
        <div className="image"
            style={ {
                backgroundImage: `url(${ imageUrl })`
            } }
        />
        <div className="collectionFooter">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>
        <CustomButton inverted>Add To Cart</CustomButton>
    </div>
)

export default CollectionItem;
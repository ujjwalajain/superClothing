import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../controls/customButton/customButton.component';

import './collectionItem.style.scss';

const CollectionItem = ({ id, name, price, imageUrl, addItemsDispatch }) => (
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

const mapDispatchToProps = dispatch => ({
    addItemsDispatch: (items) => dispatch(items)
})

export default connect(mapDispatchToProps)(CollectionItem);
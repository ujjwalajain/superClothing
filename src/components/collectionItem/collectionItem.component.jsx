import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cart.actions';

import CustomButton from '../controls/customButton/customButton.component';

import './collectionItem.style.scss';

const CollectionItem = ({ item, addItemsDispatch }) => {
    const { name, price, imageUrl } = item
    return (
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
            <CustomButton onClick={ () => addItemsDispatch(item) } inverted>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemsDispatch: (items) => dispatch(items)
})

export default connect(null, mapDispatchToProps)(CollectionItem);
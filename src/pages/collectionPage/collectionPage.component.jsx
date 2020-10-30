import React from 'react';
import { connect } from 'react-redux';

import { SelectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collectionItem/collectionItem.component';

import './collectionPage.style.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collectionPage">
            <h2 className="title">{ title }</h2>
            <div className="collectionItems">
                { items.map(item => (
                    <CollectionItem key={ item.id } item={ item } />
                )) }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: SelectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
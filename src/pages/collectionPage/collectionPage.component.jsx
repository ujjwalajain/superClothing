import React from 'react';
import { connect } from 'react-redux';

import { SelectCollection } from '../../redux/shop/shop.selector';

import './collectionPage.style.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className="collectionPage">
            collectionPage
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: SelectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
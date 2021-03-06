import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SelectCollectionForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

import './collectionOverview.style.scss';

const CollectionOverview = ({ collection }) => (
    <div className="collectionOverview">
        {
            collection.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={ id } { ...otherCollectionProps } />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: SelectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview);
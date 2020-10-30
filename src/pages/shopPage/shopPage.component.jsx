import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { SelectCollection } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

const ShopPage = ({ collection }) => (
    <div className='shopPage'>
        {
            collection.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={ id } { ...otherCollectionProps } />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: SelectCollection
})

export default connect(mapStateToProps)(ShopPage);
import React from 'react';
import { connect } from 'react-redux';

import './collectionPage.style.scss';

const CollectionPage = ({ match }) => {
    console.log("match.params.collectionId")
    console.log(match.params.collectionId)
    return (
        <div className="collectionPage">
            collectionPage
        </div>
    )
}
export default CollectionPage;
import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collectionPage/collectionPage.component';
import CollectionOverview from '../../components/collectionOverview/collectionOverview.component';

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className='shopPage'>
            <Route exact path={ `${ match.path }` } component={ CollectionOverview } />
            <Route exact path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
        </div>
    )
}

export default ShopPage;
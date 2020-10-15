import React from 'react';

import './collectionPreview.style.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.map(item => (
                    <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;
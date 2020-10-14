import React from 'react';
import './menuItem.style.scss';

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div className={`{size} menuitem`}>
            <div className="backgroundImage" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    );
};

export default MenuItem;
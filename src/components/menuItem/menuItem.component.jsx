import React from 'react';
import './menuItem.style.scss';

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`{size} menuitem`}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    );
};

export default MenuItem;
import React from 'react';

import './customButton.style.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className="customButton" { ...otherProps }>
        { children }
    </button>
)

export default CustomButton;
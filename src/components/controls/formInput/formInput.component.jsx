import React from 'react';


import './formInput.style.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => (
    <div className="formGroup">
        <input className="formInput" onChange={ handleChange } { ...otherProps }></input>
        {
            label ?
                <label className={ `${ otherProps.value.length ? "shrink" : '' } formInputLabel` }>
                    { label }
                </label>
                : null
        }

    </div>


)
export default FormInput;
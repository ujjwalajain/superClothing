import React from 'react';


import './formInput.style.scss';

const FormInput = ({ label, handleChange, ...otherFormInputProps}) => (
    <div className="formGroup">
        <input className="formInput" onChange={handleChange} {...otherFormInputProps}></input>
        {
            label ?
            <label className = {`{otherInputFormProps.value.length ? "shrink" : ''} formInputLabel`}>
                {label}
            </label> 
            : null
        }
       
    </div>

    
)
export default FormInput;
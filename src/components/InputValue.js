import React from 'react';

const InputValue = ({ value, onChangeValue }) => {
    let context;
    return (
        <div>
            <h1>{value}</h1>
            <input defaultValue={value} onChange={() => onChangeValue(context)} ref={value => context = value} />
        </div>
    )
}

export default InputValue;
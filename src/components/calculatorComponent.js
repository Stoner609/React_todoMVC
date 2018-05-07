import React from 'react';

function Calculator({ value, onClickAdd, onClickSub }) {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => onClickAdd()}>+1</button>
            <button onClick={() => onClickSub()}>-1</button>
        </div>
    );
}

export default Calculator;
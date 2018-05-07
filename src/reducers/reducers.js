import { combineReducers } from 'redux';
import * as types from '../constants/ActionType.js';

const initialData = {
    value: 0,
    context: ''
}

const initialCart = [
    {
        name: '123',
        price: 500
    }, 
    {
        name: '321', 
        price: 1000
    }
]

function calculator(state = initialData, action) {
    switch (action.type) {
        case types.PLUS:
            // return Object.assign({}, state, {
            //     value: state.value + action.num
            // });
            return {
                ...state,
                value: state.value + action.num
            }
        case types.MINUS:
            return Object.assign({}, state, {
                value: state.value - action.num
            });
        default:
            return state;
    }
}

const valueRedux = (state = initialData, action) => {
    console.log('來自 reducer', state, action.context);
    switch (action.type) {
        case types.INSERT:
            return {
                ...state,
                context: action.context
            }
        default:
            return state;
    }
}

// 
const cartRedux = (state = initialCart, action) => {
    switch (action.type) {
        case types.CART_INSERT:
            return state;
            break;
        default:
            return state;
    }
}

const calculatorApp = combineReducers({
    calculator,
    valueRedux,
    cartRedux
});

export default calculatorApp;
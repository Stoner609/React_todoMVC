import { combineReducers } from 'redux';
import { PLUS, MINUS, INSERT } from '../actions/actions.js';

const initialData = {
    value: 0,
    context: ''
}

function calculator(state = initialData, action) {
    switch (action.type) {
        case PLUS:
            // return Object.assign({}, state, {
            //     value: state.value + action.num
            // });
            return {
                ...state,
                value: state.value + action.num
            }
        case MINUS:
            return Object.assign({}, state, {
                value: state.value - action.num
            });
        default:
            return state;
    }
}

const valueinput = (state = initialData, action) => {
    console.log('來自 reducer', state, action.context)
    switch(action.type) {
        case INSERT:
            return {
                ...state,
                context: action.context
            }
        default: 
            return state;
    }
}


const calculatorApp = combineReducers({
    calculator,
    valueinput
});

export default calculatorApp;
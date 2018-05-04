import { combineReducers } from 'redux';
import { PLUS, MINUS, INSERT } from '../actions/actions.js';

const initialData = {
    value: 0
}

const initialValue = {
    context: ''
}

function calculator(state = initialData, action) {
    switch (action.type) {
        case PLUS:
            console.log("++");
            // return Object.assign({}, state, {
            //     value: state.value + action.num
            // });
            return {
                ...state,
                value: state.value + action.num
            }
        case MINUS:
            console.log("--");
            return Object.assign({}, state, {
                value: state.value - action.num
            });
        default:
            return state;
    }
}

function valueinput(state = initialValue, action) {
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
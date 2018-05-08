import { PLUS, MINUS } from '../constants/ActionType.js';

const initialData = {
    value: 0,
}

function calculatorReducer(state = initialData, action) {
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

export default calculatorReducer;
import { PLUS, MINUS } from '../constants/ActionType.js';

const initialData = {
    value: 0,
}

function calculatorRedux(state = initialData, action) {
    console.log('A ', state, action.context);
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

export default calculatorRedux;
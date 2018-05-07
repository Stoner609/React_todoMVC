import { INSERT } from '../constants/ActionType.js';

const initialData = {
    context: ''
}

const inputReducer = (state = initialData, action) => {
    console.log('B ', state, action.context);
    switch (action.type) {
        case INSERT:
            return {
                ...state,
                context: action.context
            }
        default:
            return state;
    }
}

export default inputReducer;
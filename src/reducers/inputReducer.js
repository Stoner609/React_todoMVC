import { INSERT } from '../constants/ActionType.js';

const initialData = {
    context: ''
}

const inputReducer = (state = initialData, action) => {
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
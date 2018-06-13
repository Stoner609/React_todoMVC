import { INSERT, FETCH_USERS } from '../constants/ActionType.js';

const initialData = {
    context: '',
    users: []
}

const inputReducer = (state = initialData, action) => {
    switch (action.type) {
        case INSERT:
            return {
                ...state,
                context: action.context
            }
        case FETCH_USERS:
            return {
                ...state, 
                users: action.users
            }
        default:
            return state;
    }
}

export default inputReducer;
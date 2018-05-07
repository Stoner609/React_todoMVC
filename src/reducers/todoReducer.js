import { TODO_INSERT } from '../constants/ActionType.js';

const initialData = [
    {
        name: '123',
        price: 500
    }, 
    {
        name: '321', 
        price: 1000
    }
]

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case TODO_INSERT:
            return state;
            break;
        default:
            return state;
    }
}

export default todoReducer;
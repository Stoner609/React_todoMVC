import { TODO_INSERT } from '../constants/ActionType.js';

const initialData = [
    {
        name: 'iPad',
        price: 200
    },
    {
        name: 'iPhone ',
        price: 650
    }
]

const todoItem = (state = {}, action, sss) => {
    switch (action.type) {
        case TODO_INSERT:
            return {
                name: action.name,
                price: action.price
            }
            break;
        default:
            return state;
    }

}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case TODO_INSERT:
            return [
                ...state,
                todoItem(undefined, action)
                // {
                //     name:action.name, 
                //     price: action.price
                // }
            ]
            break;
        default:
            return state;
    }
}

export default todoReducer;
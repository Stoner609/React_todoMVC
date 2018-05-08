import { TODO_INSERT, TODO_EDIT } from '../constants/ActionType.js';

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

const todoItem = (state = {}, action) => {
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
        case TODO_EDIT:
            let product = state.map(product => {
                if (product.name === action.originalName) {
                    product.name = action.name,
                    product.price = action.price
                }
                return product
            })
            return product
            break;
        default:
            return state;
    }
}

export default todoReducer;
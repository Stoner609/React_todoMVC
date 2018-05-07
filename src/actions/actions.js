// action types 
import * as types from '../constants/ActionType.js';

// action creators
export function add() {
    return {
        type: types.PLUS,
        num: 1
    }
};
export function sub() {
    return {
        type: types.MINUS,
        num: 1
    }
};

// export const insert = (context) => ({
//     type: INSERT,
//     context: context
// })

export const insert = (context) => { 
    console.log('來自 action', context);
    return {
        type: types.INSERT,
        context: context
    }
}

//
export const todo_insert = (product) => {
    console.log('Todo action', product);
    return {
        type: types.TODO_INSERT,
        product: product
    }
} 
// action types 
import * as types from '../constants/ActionType.js';
console.log('1234567')
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
    return {
        type: types.INSERT,
        context: context
    }
}

export const todo_insert = (name, price) => {
    return {
        type: types.TODO_INSERT,
        name: name,
        price: price
    }
}

export const todo_edit = (name, price, originalName) => {
    return {
        type: types.TODO_EDIT,
        name: name,
        price: price,
        originalName: originalName
    }
}

export const todo_delete = (name) => {
    return {
        type: types.TODO_DELETE,
        name: name
    }
}
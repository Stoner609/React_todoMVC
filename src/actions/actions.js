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

export const insert = (context) => ({
    type: types.INSERT,
    context: context
})

export const todo_insert = (name, price) => ({
    type: types.TODO_INSERT,
    name: name,
    price: price
})

export const todo_edit = (name, price, originalName) => ({
    type: types.TODO_EDIT,
    name: name,
    price: price,
    originalName: originalName
})


export const todo_delete = (name) => ({
    type: types.TODO_DELETE,
    name: name
})

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch(add());
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => {
            dispatch({
                type: types.FETCH_USERS,
                users: users
            })
        })
    }
}
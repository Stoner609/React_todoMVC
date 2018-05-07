// action types 
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const INSERT = 'INSERT';

// action creators
export function add() {
    return {
        type: PLUS,
        num: 1
    }
};
export function sub() {
    return {
        type: MINUS,
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
        type: INSERT,
        context: context
    }
}
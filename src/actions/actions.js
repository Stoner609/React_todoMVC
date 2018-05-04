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

export function insert(context) {
    return {
        type: INSERT,
        context: context
    }
}
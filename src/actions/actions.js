// action types 
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const INSERT = 'INSERT';

export const CART_INSERT = 'CART_INSERT';

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

//
export const cart_insert = (product) => {
    console.log('Cart action', product);
    return {
        type: CART_INSERT,
        product: product
    }
} 
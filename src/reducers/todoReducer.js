import { TODO_INSERT, TODO_EDIT, TODO_DELETE } from '../constants/ActionType.js';

console.log('123');

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
		case TODO_EDIT:
			let products = state.map(product => {
				return product.name === action.originalName
					? {
						name: action.name,
						price: action.price
					}
					: product
			});
			return products;
		case TODO_DELETE:
			const filteredProducts = state.filter(product => {
				return product.name !== action.name;
			});
			return filteredProducts;
		default:
			return state;
	}
}

export default todoReducer;
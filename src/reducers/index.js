import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';
import inputReducer from './inputReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    calculatorReducer,
    inputReducer,
    todoReducer
});
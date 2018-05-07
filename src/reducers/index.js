import { combineReducers } from 'redux';
import calculatorRedux from './calculatorRedux';
import valueRedux from './inputRedux';


export default combineReducers({
    calculatorRedux,
    valueRedux,
});
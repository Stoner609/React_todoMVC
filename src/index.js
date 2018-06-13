import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import calculatorApp from './reducers/index';

// const logger = (store) => (next) => (action) => {
//     console.log('action', action);
// }

// const logger = function(store) {
//     console.log('A-store ', store);
//     console.log('A-store.getState() ', store.getState());
//     return function(next) {
//         console.log('B-next ', next);
//         return function(action) {
//             console.log(action);
//             next(action);
//         }
//     }
// }

const middleware = applyMiddleware(thunk, logger);

let store = createStore(calculatorApp, middleware);
//console.log(store);
//console.log('來自 index', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

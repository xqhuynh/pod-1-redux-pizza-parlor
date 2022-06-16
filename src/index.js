import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import redux dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// pizzaList reducer
const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZA_LIST':
            return action.payload;
    }
    return state;
}

// Store
const store = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

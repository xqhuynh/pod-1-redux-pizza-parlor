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


const orderInformation = (state = [], action) => {
    switch(action.type){
        case 'GET_ORDER_INFORMATION':
            return action.payload
// checkout reducer
const cart = (state = [], action) => {
    switch (action.type) {
        case 'SET_CART':
            return[...state, action.payload];

    }
    return state;
}

// Store
const store = createStore(
    combineReducers({
        pizzaList, 
        cart,
        orderInformation,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

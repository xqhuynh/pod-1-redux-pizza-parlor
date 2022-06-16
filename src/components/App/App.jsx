import React from 'react';
import axios from 'axios';
import './App.css';

import Checkout from '../Checkout/Checkout';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import components
import PizzaList from '../PizzaList/PizzaList';

import Admin from '../Admin/Admin';




import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';

function App() {
  // call useDispatch 
  const dispatch = useDispatch();
  // bring in useEffect to display pizza list 'fetchPizza(); when page loads
  useEffect(() => {
    fetchPizza(); 
    }, [])

  // GET route to display pizzas, /api/pizza
  const fetchPizza = () => {
    axios({
      method: 'GET', 
      url: '/api/pizza'
    })
    .then((response) => {
      console.log('GET /api/piza list is', response);
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      })
    })
    .catch((err) => {
      console.log('Error getting pizza list', response);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <PizzaList /> 
      <Checkout />
      <CustomerInfoForm/>
      <Admin />

    </div>
  );
}

export default App;

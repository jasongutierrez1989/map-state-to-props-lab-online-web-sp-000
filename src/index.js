import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App'

import manageUsers from './reducers/manageUsers'


const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);

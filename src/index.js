import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer'
import {reducer} from 'react-redux-oauth2'

const store = createStore(combineReducers({ oauth: reducer, app: appReducer }), 
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root')
);


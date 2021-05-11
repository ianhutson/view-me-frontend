import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer'
import { CookiesProvider } from 'react-cookie';

const store = createStore(combineReducers({ app: appReducer }), 
  applyMiddleware(thunk)
)

ReactDOM.render(
  <CookiesProvider>
  <Provider store={store}>

    <App />

  </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer'
import sessionReducer from './reducers/sessionReducer'


const store = createStore(combineReducers({ app: appReducer, session: sessionReducer }), 
  applyMiddleware(thunk)
)
const Auth = ({ component: Login, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Profile, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
);
ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root')
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
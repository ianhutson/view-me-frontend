import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import Hearts from './components/Hearts'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };
  componentDidMount() {
    this.loginStatus()
  }
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

    handleLogin = (data) => {
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
    }
  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }
  
  render(){
    
  return (
    <div className='App'>
    <Router >
        <Switch>
        <Route path="/about"><About/></Route>
          <Route path="/hearts"><Hearts/></Route>
          <Route path='/'><Home/></Route>
          <Route path='/login'><Login/></Route>
        </Switch>
    </Router>
    </div>)
    }
}


export default App;

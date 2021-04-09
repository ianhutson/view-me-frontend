import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import Hearts from './components/Hearts'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{
  constructor(props) {
    super(props)
  
    }
  render(){
  return (
    <div className='App'>
    <Router >
        <Switch>
        <Route path="/about"><About/></Route>
          <Route path="/hearts"><Hearts/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
    </Router>
    </div>)
    }
}


export default App;

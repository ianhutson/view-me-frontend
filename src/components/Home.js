import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import { connect } from 'react-redux';

class Home extends Component{
    constructor(props){ 
        super(props) 
    
      this.state = {
        isLoggedIn:false, 
        user: {}
      }
    }
    render(){
    return (
        <div>
            <Header/>
            {Object.keys(this.state.user).length !== 0 && <Stream/>}
            {Object.keys(this.state.user).length == 0 && <Login/>}
            <Footer/>
        </div>
        )
    }
}
export default connect()(Home)
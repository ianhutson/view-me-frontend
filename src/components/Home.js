import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'

class Home extends Component{
    constructor(props){ 
        super(props) 
    
      this.state = {
        user:""
      }
    }
    render(){
    return (
        <div>
            <Header/>
            {this.state.user !== "" && <Stream/>}
            {this.state.user == "" && <Login/>}
            <Footer/>
        </div>
        )
    }
}
export default (Home)
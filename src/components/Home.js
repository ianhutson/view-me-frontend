import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'

class Home extends Component{
    render(){
    return (
        <div>
            <Header/>
            <Stream/>
            <Footer/>
        </div>
        )
    }
}
export default (Home)
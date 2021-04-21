import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'

import { connect } from 'react-redux';

class Home extends Component{
    constructor(props){ 
        super(props) 
    }

    componentDidMount() {
      const pull = window.location.search.split("=")[1]
      if (pull !== undefined){
      this.props.login(pull)}
      else this.props.login("")
      }
    
      handleLoading = () => {
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <Stream user={this.props.user}/>
        }
      }

    render(){
    return (
        <div>
          {console.log(this.props)}
            <Header/>
            <Stream/>
            <Footer/>
        </div>
        )
    }
}

const mapStateToProps = state => ({
  id: state.id
})

const mapDispatchToProps = dispatch => ({
  login: id => dispatch({type: 'LOGIN', id}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
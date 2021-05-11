import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'
import {currentUserFetch} from './actions/currentUserAction'
import { connect } from 'react-redux';

class Home extends Component{
    constructor(props){ 
        super(props) 
    }

    componentDidMount() {
      console.log(this.props)
      currentUserFetch()
      
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
            <Header/>
            <Stream/>
            <Footer/>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return({
    user: state.app.user
  });
 };

const mapDispatchToProps = dispatch => ({
  login: id => dispatch({type: 'LOGIN', id}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
import React, { Component } from 'react';
import Stream from './Stream'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux';
import {currentUserFetch} from './actions/currentUserAction'

class Home extends Component{
    constructor(props){ 
        super(props) 
    }
    componentDidMount(){
      this.props.currentUserFetch()
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
            {console.log("this: " + this)}
            {console.log("props: " + this.props)}
            {console.log("state: " + this.state)}
            <Stream/>
            <Footer/>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return({
    user: state.app.user
  });
 };


export default connect(mapStateToProps,{currentUserFetch})(Home)
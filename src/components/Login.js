import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from './actions/userAction'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.props.store.loginWithDispatch()
    }

    handleLoading = () => {
      if(this.props.loading) {
        return <div>Loading...</div>
      }
    }
render(){
    return (
    <div className="square">
      <image src="/img/logo.png" width="98" height="107" title="Logo" alt="Logo"></image>
      <p style={{color: 'black', fontSize: '35px'}}>Welcome to ViewMe! Please login. </p>
      <a className="login_button" style={{width: '15%', margin: 'auto', textAlign: 'center'}}  onClick={() => this.handleClick} ><image src="/img/twitch.png">Login with Twitch</image></a>
    </div>)
    
    }
  }

  const mapStateToProps = state => ({
    name: state.name,
    image: state.image,
    twitch_id: state.twitch_id,
    loading: state.loading
  })

  const mapDispatchToProps = dispatch => {
    return {
      loginWithDispatch: () => dispatch(login())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Login)

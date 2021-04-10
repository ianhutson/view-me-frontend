import { connect } from 'react-redux'
import React, { Component } from 'react';
import { fetchUser } from './actions/userAction'

class Login extends Component{
    render(){
    const url = "https://id.twitch.tv/oauth2/authorize?client_id="+process.env.REACT_APP_id+"&redirect_uri=http://localhost:3001/auth/twitch/callback&response_type=code&scope=user:read:email"
    return (
    <div className="square">
      <image src="/img/logo.png" width="98" height="107" title="Logo" alt="Logo"></image>
      <p style={{color: 'black', fontSize: '35px'}}>Welcome to ViewMe! Please login. </p>
      <a className="login_button" style={{width: '15%', margin: 'auto', textAlign: 'center'}} href="http://localhost:3001/login"><image src="/img/twitch.png">Login with Twitch</image></a>
    </div>)
    }
}
    const mapStateToProps = state => {
        return {
          user: state.user,
          image: state.image,
          twitch_id: state.twitch_id,
          loading: state.loading
        }
      }

      const mapDispatchToProps = dispatchFN => {
        return {
          fetchUserWithDispatch: () => dispatchFN(fetchUser())
        }
      }

export default connect(mapStateToProps, mapDispatchToProps) (Login)

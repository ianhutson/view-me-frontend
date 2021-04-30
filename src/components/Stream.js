import React, { Component } from 'react';
import { TwitchEmbed} from 'react-twitch-embed';
import Profile from './Profile'
import Login from './Login'
import { connect } from 'react-redux';

class Stream extends Component {
  render(){
    
  return (
    <div>
      <br></br>

     
       <br></br>
      <center>

      {this.props.twitch_id !== undefined && <TwitchEmbed
      
        channel="moonmoon"
        id="moonmoon"
        theme="dark"
      />}
      </center>
    </div>
  );
}
}
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
}



export default Stream


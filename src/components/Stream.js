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

      {this.props.twitch_id == undefined && <Login/>}
       {this.props.twitch_id !== undefined && <Profile/>}
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
const mapStateToProps = state => ({
  id: state.twitch_id
})

const mapDispatchToProps = dispatch => ({
  login: id => dispatch({type: 'LOGIN', id}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Stream)
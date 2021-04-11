import React from 'react';
import { TwitchEmbed} from 'react-twitch-embed';
import Profile from './Profile'

const Stream = () => {
  return (
    <div>
      <br></br>
       <Profile/>
       <br></br>
      <center>
       
      <TwitchEmbed
        channel="moonmoon"
        id="moonmoon"
        theme="dark"
        muted
        onVideoPause={() => console.log(':(')}
      />
      </center>
    </div>
  );
}

export default (Stream)





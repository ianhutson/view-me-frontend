import React from 'react';
import { TwitchEmbed} from 'react-twitch-embed';
 
const Stream = () => {
  return (
    <div>
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





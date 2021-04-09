const Login = () => {
    const url = "https://id.twitch.tv/oauth2/authorize?client_id="+process.env.REACT_APP_id+"&redirect_uri=http://localhost:3000/&response_type=code&scope=user:read:email"

    return (

<div className="square">
      <image src="/img/logo.png" width="98" height="107" title="Logo" alt="Logo"></image>
    <p style={{color: 'black', fontSize: '35px'}}>Welcome to ViewMe! Please login. </p>
    <a className="login_button" style={{width: '15%', margin: 'auto', textAlign: 'center'}} href={url}><image src="/img/twitch.png">Login with Twitch</image></a>
</div>
)
    }

export default Login

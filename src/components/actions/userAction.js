import {userConstructor} from './userConstructor'

export const login = () => {
    const clientId = process.env.REACT_APP_id;  
    const redirect = "http://localhost:3000/auth/twitch/callback"
    const url = 'https://id.twitch.tv/oauth2/authorize?client_id=' + clientId + '&redirect_uri=' + encodeURIComponent(redirect) + '&response_type=token&scope=user:read:email';
    return (dispatch) => {
        
        dispatch({type:'LOADING'})
        fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }}).then(response => {
                console.log(response.json())
            return response.json()
        }).then(responseJSON => {
            userConstructor(responseJSON)
            
        })
    }
}

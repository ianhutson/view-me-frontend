import * as Cookies from ‘js-cookie’

export const login = () => {
    const url = "http://localhost:3000/users"
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
           console.log(responseJSON)
            
        })
    }
}

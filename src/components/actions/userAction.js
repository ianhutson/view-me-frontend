export const fetchUser = () => {
    const url = "http://localhost:3001/"
    return (dispatch) => {
        dispatch({type:'LOADING'})
        fetch(url).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'POSTING', users: responseJSON})
        })
    }
}
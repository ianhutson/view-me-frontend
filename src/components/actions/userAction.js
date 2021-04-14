export const login = () => {
    const url = "http://localhost:3001/users"
    return (dispatch) => {
        dispatch({type:'LOADING'})
        fetch(url).then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'POSTING', users: responseJSON})
        })
    }
}
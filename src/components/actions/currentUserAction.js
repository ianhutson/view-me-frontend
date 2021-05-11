export const currentUserFetch = () => {
    return dispatch => {
        dispatch({type: 'LOADING_USER'})

        return(
            fetch('http://localhost:3001/current_user')
            .then(resq => resq.json())
            .then(user => {
                dispatch({type: 'FETCHING_USER', payload: user })
            })
            .catch(function(error){console.log('there was an error:', error.message)})
        )
    }
}
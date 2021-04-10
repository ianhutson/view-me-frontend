import {userConstructor} from './userConstructor'

function userPoster(name){
    const url ='http://localhost:3001/users'
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,

        })
    }
    fetch(url, configObj)
        .then(res => {
            console.log(res)
            res.json()})
        .then(data => {
            console.log(data)
            new userConstructor(data)
        })
}

export default userPoster
import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="profile_container">
                    <h1 style={{fontSize:'24px'}}>shart - 100 Hearts</h1>
                    <h1 style={{fontSize:'40px'}}>[]</h1>
                    <a className="edit_button" href="https://www.twitch.tv/settings/profile">Edit Profile</a>
                   
                </div>
            </div>
        )
    }
}

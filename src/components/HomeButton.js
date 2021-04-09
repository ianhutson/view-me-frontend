import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {
    return (
        <div >
            <Link className="home_button" to="/">
                    Home
            </Link>
        </div>
    )
}

export default HomeButton

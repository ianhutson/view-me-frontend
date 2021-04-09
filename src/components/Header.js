import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{

render(){
  return (     
      <div className='header'>
            
        <nav className='nav'>
            <Link className="nav_link" to="/hearts">
                <div className='nav_buttons'>
                    Get Hearts
                </div>
            </Link>
            <Link className="nav_link" to="/about">
                <div className='nav_buttons'>
                   About
                </div>
            </Link>
        </nav>
        
        <img className="logo" alt="logo" src={process.env.PUBLIC_URL + "/logo.png"}/>
        </div>
  )
}
}
export default Header;
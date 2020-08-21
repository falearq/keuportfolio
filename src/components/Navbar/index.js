import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './navbar.css'

function Navbar() {
    return(
        <nav className='nav-container'>
            <div className='home-is-where-the-heart-is'> 
                <Link to = "/">
                    <h1>♡</h1>
                </Link>
            
            </div>
            <ul className='list-container'>
                <Link to = "about">
                    <li className='nav-links'>ABOUT</li>
                </Link>

                <Link to = "front-end">
                    <li className='nav-links'>FRONT-END</li>
                </Link>

                <Link to = "digital-work">
                    <li className='nav-links'>DIGITAL WORK</li>
                </Link>

                <Link to = "contact">
                    <li className='nav-links'>CONTACT</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Navbar
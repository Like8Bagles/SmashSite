import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {

    const linkStyle = {
        width: '100px',
        margin: '0 6px 6px',
        TextDecoration: 'none',
        color: 'black',
        align: 'center',
        position: 'relative'
    }

    return (
        <div>
            <NavLink to="/" >
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default NavBar
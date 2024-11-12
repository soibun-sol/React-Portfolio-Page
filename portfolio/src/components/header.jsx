import React from 'react'
import { Link, } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Keegan's Portfolio</h1>
            <nav className= "navbar">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/about">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
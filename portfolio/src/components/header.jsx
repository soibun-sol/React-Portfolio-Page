import React from 'react'
import { Link, } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Keegan's Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <h1 className="logo"><Link to='/'>Esperanza Cardenas</Link></h1>
    
            <nav className="nav">
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
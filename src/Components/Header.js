import React from 'react';

const Header = () => {
    return(
        <header>
            <h1 className="logo">Esperanza Cardenas</h1>
    
            <nav className="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link className='link' to='/home'>Home</Link></li>
                    <li><Link className='link' to='/projects'>Projects</Link></li>
                    <li><Link className='link' to='/resume'>Resume</Link></li>
                    <li><Link className='link' to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};


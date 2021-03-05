import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return(
        <div className='landing-img'>
            <div className='landing-page'>
                <h1 className='name'>Esperanza Cardenas</h1>
                <h2 className='title'>• Fullstack Web Developer •</h2>
                <button className='button'><Link className='button' to='/home'>Enter</Link></button>   
            </div>
        </div>
    )
}

export default LandingPage;
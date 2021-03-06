import React from 'react';
import Nav from "../Nav/Nav";
import resume from './resume-cropped.png';
import './Resume.css'

const Resume = () => {
    return(
        <div>
            <Nav/>
            <div className='resume-container'>
                <img className='resume-img' src={resume} alt='resume'/>
            </div>
        </div>
    )
};

export default Resume;
import React, { Component } from 'react';
import store from '../store';
import Tile from './Tile';
import cuid from 'cuid';
const { projects } = store;


class Projects extends Component {
    render(){
        const content = projects.map(project => <Tile {...project} key={cuid()}/>)

        return(
            <article className="container" id="projects">
                <h2>Projects</h2>
                <div>
                    {content}
                </div>
            </article>
        );
    }
};

export default Projects;
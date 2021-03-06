import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import store from './store';
import Tile from './Tile';
import cuid from 'cuid';


const { projects } = store;


class Projects extends Component {
    render(){
        const content = projects.map(project => <Tile {...project} key={cuid()}/>)

        return(
            <div>
            <Nav/>
            <article className="projects-container" id="projects">
                <div>
                    {content}
                </div>
            </article>
            </div>
        );
    }
};

export default Projects;
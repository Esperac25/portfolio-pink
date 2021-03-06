import React, { Component } from 'react';
import './Tile.css';


class Tile extends Component {
    
    render() { 
        let {img, title, description, stack, repo, live} = this.props;
        
        if (img === null || img === '' || !img) {
            img = '';
        }

        return (
            <div className="tile" >
                <img 
                    src={img} 
                    alt={`${title} screenshot`} 
                    className='tile-img'
                />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Tech Stack: {stack}</p>
                <a href={repo}><button>Repo Link</button></a>
                <a href={live}><button>Live App</button></a>
            </div>  
        );
    };
};
 
export default Tile;
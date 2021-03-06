import React, { Component } from 'react';
import './Tile.css';


class Tile extends Component {
    
    render() { 
        let {img, title, description, stack, repo, live} = this.props;
        
        return (
            <div className="tile" >
                <h3 className='tile-title'>{title}</h3>
                <img 
                    src={img} 
                    alt={`${title} screenshot`} 
                    className='tile-img'
                />
                <div className='tile-desc'>
                <p>{description}</p>
                <p>Tech Stack: {stack}</p>
                <div className='buttons'>
                <a href={repo}><button className='tile-button'>Repo</button></a>
                <a href={live}><button className='tile-button'>App</button></a>
                </div>
                </div>
            </div>  
        );
    };
};
 
export default Tile;
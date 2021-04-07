import React, { Component } from 'react';
import './Tile.css';


class Tile extends Component {
    
    render() { 
        let {img, title, description, stack, server, client, live} = this.props;
        
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
                <button className='tile-button'><a href={live} rel='noreferrer' target='_blank'>Demo</a></button>
                <button className='tile-button'><a href={client} rel='noreferrer' target='_blank'>Client Repo</a></button>
                <button className='tile-button'><a href={server} rel='noreferrer' target='_blank'>Server Repo</a></button>
                </div>
                </div>
            </div>  
        );
    };
};
 
export default Tile;

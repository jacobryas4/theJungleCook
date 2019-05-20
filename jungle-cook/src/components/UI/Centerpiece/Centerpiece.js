import React from 'react';
import './CenterPiece.scss';

const centerPiece = (props) => (
    <div className="Centerpiece">
        <div className="Centerpiece__circle--big">

            <div className="Centerpiece__circle--big__text">
            
                <h3>The Jungle Cook</h3>
                <br />
                <p>The home to various recipes of your choice. Add your own recipe today and fill the world with joy!</p>
            
            </div>
    
        </div>
        <div className="Centerpiece__circle--small">

            <div className="Centerpiece__circle--small__text">
                <p>Want to be a Jungle Cook? Go ahead and the kitchen is yours!</p>
            </div>
            
        </div>
    </div>
)

export default centerPiece;
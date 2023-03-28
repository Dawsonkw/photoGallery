import React from 'react';
import placeholder from '../images/placeholder.png'

function PhotoCard(props) {
    return (
        <div className='photoCard'> 
            <div className='picBox'>
                <div>
                    <img src={placeholder} alt="" />
                </div>
            </div>
            <div className='textArea'>
                <div>
                    Area for text
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
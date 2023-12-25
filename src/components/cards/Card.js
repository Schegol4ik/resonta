import React from 'react';
import './Card.scss'

const Card = ({title, about, img}) => {
    return (
        <div className='wrapper_card'>
            <h1>{title}</h1>
            <p>{about}</p>
        </div>
    );
};

export default Card;
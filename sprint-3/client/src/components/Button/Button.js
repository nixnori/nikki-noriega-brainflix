import React from 'react';
import './Button.scss';

const Button = props => {
    return (
        <button type={props.type} className={`button ${props.className}`}>
            <img className="button__icon" src={props.image} />
            {props.text}
        </button>
    )
}

export default Button;
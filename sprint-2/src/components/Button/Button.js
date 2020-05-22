import React from 'react';
import './Button.scss';

const Button = props => {
    return (
        <button className={props.className}>
            <img className="button__icon" src={props.image} />
            {props.text}
        </button>
    )
}

export default Button;
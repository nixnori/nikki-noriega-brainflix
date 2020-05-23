import React from 'react';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import './Description.scss';

const Description = props => {
    return (
        <div className="description">
            <div className="description__container">
                <h2 className="description__title">{props.video.title}</h2>
                <div className="items">
                    <div className="description__item">
                        <h4 className="description__channel">By {props.video.channel}</h4>
                        <p className="description__date">{props.video.timestamp}</p>
                    </div>
                    <div className="description__item item-2">
                        <img className="description__icon" src={views} />
                        <p className="description__numbers">{props.video.views}</p>
                        <img className="description__icon" src={likes} />
                        <p className="description__numbers">{props.video.likes}</p>
                    </div>
                </div>
            </div>
            <p className="description__text">{props.video.description}</p>
        </div>
    )
}

export default Description;
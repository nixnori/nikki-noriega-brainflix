import React from 'react';

const Description = props => {
    return (
        <div className="description">
            <h2 className="description__title">{props.video.title}</h2>
            <h4 className="description__channel">By{props.video.channel}</h4>
            <p><span className="description__date"></span>{props.video.date}</p>
            <p className="description__views">{props.video.views}</p>
            <p className="description__likes">{props.video.likes}</p>
            <p className="description__text">{props.video.description}</p>
        </div>
    )
}

export default Description;
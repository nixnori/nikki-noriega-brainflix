import React from 'react';
import './NextVideo.scss';
import { Link } from 'react-router-dom';

const NextVideo = props => {
    return (
        <div className="video__section">
            <h4 className="video__header">NEXT VIDEO</h4>
            {
                props.videoList.map(video => {
                    return (
                        <Link to={`/${video.id}`} className="video__link" key={video.id}>
                            <div className="video__container">
                                <img className="video__image" src={video.image} alt="video" />
                                <div className="video__text">
                                    <h4 className="video__title">{video.title}</h4>
                                    <p className="video__channel">{video.channel}</p>
                                </div>
                            </div>
                        </Link>
                    );   
                })
            }
        </div>
    )
}

export default NextVideo;
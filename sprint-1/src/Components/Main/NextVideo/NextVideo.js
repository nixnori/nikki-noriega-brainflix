import React from 'react';
import './NextVideo.scss';

const NextVideo = props => {
    return (
        <div className="video__section">
            <h4 className="video__header">NEXT VIDEO</h4>
            {
                props.videoList.map(video => {
                    if (props.state !== video) {
                        return (
                            <div className="video__container" key={video.id}>
                                <img className="video__image" src={video.image} />
                                <div className="video__text">
                                    <h4 className="video__title">{video.title}</h4>
                                    <p className="video__channel">{video.channel}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default NextVideo;
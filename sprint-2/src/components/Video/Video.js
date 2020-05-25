import React from 'react';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import './Video.scss';


const Video = ({posterImage, duration, video}) => {
    return (
        <div className="main-video__container">
            <video className="main-video" poster={posterImage} src={video}></video>
            <div className="main-video__controls">
                <div className="main-video__play"><img src={play} alt="play-button" /></div>
                <div className="main-video__scrubber"><hr className="main-video__scrubber--line"></hr><span className="main-video__time">0:00/{duration}</span></div>
                <div className="main-video__full-vol"><img src={fullscreen} alt="fullscreen" /><img src={volume} alt="volume" /></div>
            </div>
        </div>
    )
}

export default Video;
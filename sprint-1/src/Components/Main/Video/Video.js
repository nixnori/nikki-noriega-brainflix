import React from 'react';
import vid0 from '../../../assets/Images/video-list-0.jpg';
import './Video.scss';
import play from '../../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../../assets/Icons/SVG/Icon-volume.svg';



const Video = () => {
    return (
        <div className="main-video__container">
            <video className="main-video" poster={vid0}>
            </video>
            <div className="main-video__controls">
                <div className="main-video__play"><img src={play} /></div>
                <div className="main-video__scrubber"><hr className="main-video__scrubber--line"></hr><span className="main-video__time">0:000:42</span></div>
                <div className="main-video__full-vol"><img src={fullscreen} /><img src={volume} /></div>
            </div>
        </div>
    )
}


export default Video;
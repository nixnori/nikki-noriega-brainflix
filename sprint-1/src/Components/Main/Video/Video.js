import React from 'react';
import vid0 from '../../../assets/Images/video-list-0.jpg';
import './Video.scss';



const Video = () => {
    return (
        <div className="main-video__container">
            <video className="main-video" poster={vid0} controls></video>
        </div>
    )
}


export default Video;
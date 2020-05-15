import React from 'react';
import vid0 from '../../../assets/Images/video-list-0.jpg';
import './Video.scss';



const Video = () => {
    return (
        <video className="video__main" poster={vid0} controls></video>
    )
}


export default Video;
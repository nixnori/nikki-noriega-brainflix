import React, {Component} from 'react';
import vid0 from '../../assets/Images/video-list-0.jpg';
import './Video.scss';

class Video extends Component {
   render() {
        return (
            <video className="video" poster={vid0} controls></video>
        );
   }
}

export default Video;
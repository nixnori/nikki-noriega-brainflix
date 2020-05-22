import React from 'react';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';
import axios from 'axios';
import Description from './Components/Description/Description';
import Form from './Components/Form/Form';
import Comments from './Components/Comments/Comments';

const API_URL = "https://project-2-api.herokuapp.com/"
const apiKey = "?api_key=ecdcc749-4c65-49ed-b885-aa391a32e3d0"

class Video extends Component {
    state = {
        videoData: videoData,
        currentVideo: sideVideo[0]
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/videos${apiKey}`)
            .then(response => {
                this.setState({
                    videoData: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
            <div className="main-video__container">
                <video className="main-video" poster={this.state.videoData.image}>
                </video>
                <div className="main-video__controls">
                    <div className="main-video__play"><img src={play} /></div>
                    <div className="main-video__scrubber"><hr className="main-video__scrubber--line"></hr><span className="main-video__time">0:00/{this.state.videoData.duration}</span></div>
                    <div className="main-video__full-vol"><img src={fullscreen} /><img src={volume} /></div>
                </div>
            </div>
            <div className="main__container">
            <div className="main__descr">
                <Description video={this.state.videoData} />
                <Form />
                <Comments comments={this.state.videoData.comments} />
            </div>
            <div className="main__vidlist">
                <NextVideo videoList={sideVideo} state={this.state.currentVideo}/>
            </div>
            </div>
            </>
        )
    }
}


export default Video;
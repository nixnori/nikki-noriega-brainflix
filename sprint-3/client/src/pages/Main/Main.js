import React, { Component } from 'react';
import axios from 'axios';
import Video from '../../components/Video/Video';
import Description from '../../components/Description/Description';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import './Main.scss';


const API_URL = "http://localhost:8080";
const KEY = "?api_key=ecdcc749-4c65-49ed-b885-aa391a32e3d0"

class Main extends Component {
    state = {
        mainVideo: {},
        videoList: []
    }

    changeState(change) {
        axios
            .get(`${API_URL}/videos/${change}`)
            .then(res => {
                this.setState({
                    mainVideo: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        axios
        .get(`${API_URL}/videos`)
        .then(res => {
            console.log(res.data);
            this.setState({
                videoList: res.data
            })

            if (!this.props.match.params.videoId) {
                this.setState({
                    mainVideo: res.data[0],
                })
                this.changeState(this.state.mainVideo.id);
            } else {
                this.changeState(this.props.match.params.videoId)
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (!this.props.match.params.videoId && prevProps.match.params.videoId) {
            axios
            .get(`${API_URL}/videos`)
            .then(res => {
                this.setState({
                    mainVideo: res.data[0],
                })
                this.changeState(this.state.mainVideo.id);
             })
        } else if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            window.scrollTo(0, 0);
            this.changeState(this.props.match.params.videoId);
        } 
    }

    render() {
        let sideVideo = this.state.videoList.filter(video => video.id !== this.state.mainVideo.id);
       
        return (
            <>
                <Video posterImage={this.state.mainVideo.image} duration={this.state.mainVideo.duration} video={this.state.mainVideo.video+KEY} />
                <div className="main__container">
                    <div className="main__descr">
                        <Description video={this.state.mainVideo} />
                        <Form commentsLength={this.state.mainVideo.comments} />
                        <Comments comments={this.state.mainVideo.comments} />
                    </div>
                    <div className="main__vidlist">
                        <NextVideo videoList={sideVideo}/>
                    </div>
                </div>
            </>
        )
    }
}


export default Main;
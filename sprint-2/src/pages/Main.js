import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Video from '../components/Video/Video';
import Description from '../components/Description/Description';
import Form from '../components/Form/Form';
import Comments from '../components/Comments/Comments';
import NextVideo from '../components/NextVideo/NextVideo';


const API_URL = "https://project-2-api.herokuapp.com"
const KEY = "?api_key=ecdcc749-4c65-49ed-b885-aa391a32e3d0"

class Main extends Component {
    state = {
        mainVideo: {},
        videoList: []
    }

    componentDidMount() {
        axios
        .get(`${API_URL}/videos${KEY}`)
        .then(response => {
            console.log(response.data);

            this.setState({
                mainVideo: response.data[0],
                videoList: response.data
            })

            axios
            .get(`${API_URL}/videos/${this.state.mainVideo.id+KEY}`)
            .then(response => {
                console.log(response.data.comments);

                this.setState({
                    mainVideo: response.data
                })
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <>
                <Video posterImage={this.state.mainVideo.image} duration={this.state.mainVideo.duration}/>
                <div className="main__container">
                    <div className="main__descr">
                        <Description video={this.state.mainVideo} />
                        <Form commentsLength={this.state.mainVideo.comments}/>
                        <Comments comments={this.state.mainVideo.comments} />
                    </div>
                <div className="main__vidlist">
                    <NextVideo videoList={this.state.videoList}/>
                </div>
                </div>
            </>
        )
    }
}


export default Main;
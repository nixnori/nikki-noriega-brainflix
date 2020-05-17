import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Video from './Components/Main/Video/Video';
import videoData from './Components/Main/Video/VideoData';
import Description from './Components/Main/Description/Description';
import Form from './Components/Main/Form/Form';
import commentsList from './Components/Main/Comments/CommentsList';
import Comments from './Components/Main/Comments/Comments';
import sideVideo from './Components/Main/NextVideo/VideoList';
import NextVideo from './Components/Main/NextVideo/NextVideo';

class App extends Component {

  state = {
    videoData: videoData,
    currenVideo: sideVideo[0]
  }

  render() {
    return (
      <div>
        <Header/>
        <Video />
        <div className="app__container">
          <div className="app__descr">
            <Description video={this.state.videoData} />
            <Form />
            <Comments comments={commentsList} />
          </div>
          <div className="app__vidlist">
            <NextVideo videoList={sideVideo} state={this.state.video}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

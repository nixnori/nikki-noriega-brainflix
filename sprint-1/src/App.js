import React, {Component} from 'react';
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
    video: sideVideo[0]
  }

  render() {
    return (
      <div>
        <Header/>
        <Video />
        <Description video={videoData} />
        <Form />
        <Comments comments={commentsList} />
        <NextVideo videoList={sideVideo} state={this.state.video}/>
      </div>
    );
  }
}

export default App;

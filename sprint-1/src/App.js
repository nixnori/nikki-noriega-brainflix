import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Video from './Components/Main/Video/Video';
import videoData from './Components/Main/Video/VideoData';
import Description from './Components/Main/Description/Description';
import Form from './Components/Main/Form/Form';
import commentsList from './Components/Main/Comments/CommentsList';
import Comments from './Components/Main/Comments/Comments';

class App extends Component {

  state = {
    video: videoData[0],
  }

  render() {
    return (
      <div>
        <Header/>
        <Video />
        <Description video={this.state.video} />
        <Form />
        <Comments comments={commentsList} />
      </div>
    );
  }
}

export default App;

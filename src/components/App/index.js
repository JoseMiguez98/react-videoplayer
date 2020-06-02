import React, { Component, Fragment } from 'react';
import youtube from '../../api';
import config from '../../api/config';
import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import VideoDetails from '../VideoDetails';
import './styles.scss';
import { PENDING, ERROR, SUCCESS } from '../../api/states';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: 0,
      fetchState: ''
    }
    this.searchTerm = this.searchTerm.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  searchTerm(term) {
    this.setState(prevState => ({
      ...prevState,
      fetchState: PENDING
    }))

    youtube.get('/search', {
      params: {
        ...config,
        q: term,
      }
    }).then(response => (
      this.setState(prevState => ({
        ...prevState,
        videos: response.data.items,
        fetchState: SUCCESS
      }))
    )).catch(() => (
      this.setState(prevState => ({
        ...prevState,
        fetchState: ERROR
      }))
    ));
  }

  onVideoClick(index) {
    this.setState(prevState => ({
      ...prevState,
      selectedVideo: index
    }));
  }

  render() {
    const { videos, selectedVideo, fetchState } = this.state;
    const current = videos[selectedVideo];

    return (
      <Fragment>
        <SearchBar onSearch={this.searchTerm} />
        {videos.length && fetchState === SUCCESS ?
          <div className="results-wrapper">
            <VideoDetails
              description={current.snippet.description}
              id={current.id.videoId}
              title={current.snippet.title}
            />
            <VideoList videos={videos} onVideoClick={this.onVideoClick}/>
          </div>
          : fetchState === PENDING ?
            <div>Loading...</div> : fetchState === ERROR ?
            <div>There was an error trying to fetch data, please try again later</div> :
            fetchState === SUCCESS && !videos.length && <div>The search not returned results, try another search!</div>}
      </Fragment>
    );
  }
}

export default App;
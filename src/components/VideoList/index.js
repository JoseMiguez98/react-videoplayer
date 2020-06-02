import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos, onVideoClick }) => (
  <div className="ui divided items videos-list">
  {console.log(videos)}
    {videos.map((video, index) => (
      <VideoItem
        description={video.snippet.description}
        image={video.snippet.thumbnails.medium}
        index={index}
        key={video.id.videoId}
        title={video.snippet.title}
        onVideoClick={onVideoClick}
      />
    ))}
  </div>
);

export default VideoList
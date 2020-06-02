import React from 'react';
import './styles.scss';

const VideoDetails = ({ id, title, description }) => (
  <div className="video-details">
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      className="video-details__iframe"
      title="yt-player"
      allowFullScreen
    />
    <h4 className="ui header">{title}</h4>
    <div className="meta">{description}</div>
  </div>
);

export default VideoDetails;
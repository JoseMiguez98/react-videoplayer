import React from 'react';
import './styles.scss';

const VideoItem = ({ title, description, image, onVideoClick, index }) => {

  function handleClick() {
    onVideoClick(index);
  }

  return (
    <div className="video-item item" onClick={handleClick}>
      <div className="image">
        <img alt={description} src={image.url}></img>
      </div>
      <div className="content">
        <div className="header video-item__header">{title}</div>
        <div className="meta">{description}</div>
      </div>
    </div>
  )
};

export default VideoItem;
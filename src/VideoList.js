import React from 'react';
import Navbar from './Navbar.js';
import VideoPlayer from './VideoPlayer.js';


const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <>
    <Navbar/>
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <p>{video.title}</p>
            <button onClick={() => onVideoSelect(video)}>Select Video</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default VideoList;

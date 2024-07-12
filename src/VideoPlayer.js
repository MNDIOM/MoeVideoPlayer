import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video }) => {
  return (
    <div>
      {video ? (
        <div>
          <h2>Selected Video</h2>
          <p>{video.title}</p>
          <ReactPlayer
            url={video.url}
            playing={true}
            controls={true}
            volume={0.8}
            width='100%'
            height='150%'
          />
        </div>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default VideoPlayer;
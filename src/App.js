// src/App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import './index.css'; 
import VideoPlayer from './VideoPlayer';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState({});
  const [showCommentInput, setShowCommentInput] = useState({});

  const videos = [
    {
      id: 1,
      title: 'Matthew Carter Talks with Filmon',
      url: 'https://youtu.be/KKJkEUgZufc',
      thumbnail: image1,
    },
    {
      id: 2,
      title: 'Moe back workout',
      url: 'https://www.youtube.com/shorts/mkUvohaMLL0?t=19&feature=share',
      thumbnail: image2,
    },
    {
      id: 3,
      title: 'React js in 10 minutes',
      url: 'https://www.youtube.com/watch?v=s2skans2dP4',
      thumbnail: image3,
    },
    {
      id: 4,
      title: 'Python tutorial',
      url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
      thumbnail: image4,
    },
    {
      id: 5,
      title: 'How to find your purpose',
      url: 'https://www.youtube.com/watch?v=WzrALzUnZ0g',
      thumbnail: image4, 
    },
    // Add more video objects here
  ];

  const handleLike = (video) => {
    console.log(`Liked video: ${video.title}`);
  };

  const handleCommentButtonClick = (video) => {
    setShowCommentInput(prev => ({ ...prev, [video.id]: !prev[video.id] }));
  };

  const handleCommentChange = (e, videoId) => {
    setComments(prev => ({ ...prev, [videoId]: e.target.value }));
  };

  const handleCommentSubmit = (videoId) => {
    console.log(`Comment on video ${videoId}: ${comments[videoId]}`);
    setComments(prev => ({ ...prev, [videoId]: '' }));
    setShowCommentInput(prev => ({ ...prev, [videoId]: false }));
  };

  return (
    <>
      <Navbar />
      <div>
      <VideoPlayer video={selectedVideo} />

        <h1>Video Playlist</h1>
        <ul className="video-list">
          {videos.map(video => (
            <li key={video.id} className="video-item">
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
              <div className="buttons">
                <button className="like-button" onClick={() => handleLike(video)}>Like</button>
                <button className="comment-button" onClick={() => handleCommentButtonClick(video)}>Comment</button>
                <button onClick={() => setSelectedVideo(video)}>Select Video</button>
              </div>
              {showCommentInput[video.id] && (
                <div className="comment-section">
                  <input
                    type="text"
                    className="comment-input"
                    value={comments[video.id] || ''}
                    onChange={(e) => handleCommentChange(e, video.id)}
                    placeholder="Write a comment..."
                  />
                  <button className="submit-comment-button" onClick={() => handleCommentSubmit(video.id)}>Submit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        
      </div>
    </>
  );
}

export default App;

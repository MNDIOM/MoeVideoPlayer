// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'; // Ensure this import is correct and only once
import reportWebVitals from './reportWebVitals';
import './Navbar.css';
// import './VideoList.js';
// import ReactPlayer from 'react-player';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

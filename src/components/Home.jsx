// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Socials</h1>
      <ul>
        <li><Link to="/weather">Get Weather</Link></li>
        <li><Link to="/news">Get News</Link></li>
        <li><Link to="/live-cricket-score">Live Cricket Score</Link></li>
        {/*add more here */}
      </ul>
    </div>
  );
};

export default Home;

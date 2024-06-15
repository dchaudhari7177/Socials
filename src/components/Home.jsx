import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Socials</h1>
        <p>Your one-stop destination for weather updates, news, live cricket scores, and more!</p>
      </div>
      <div className="home-links">
        <ul>
          <li><Link to="/weather" className="home-link">Get Weather</Link></li>
          <li><Link to="/news" className="home-link">Get News</Link></li>
          <li><Link to="/live-cricket-score" className="home-link">Live Cricket Score</Link></li>
          {/*more links */}
        </ul>
      </div>
    </div>
  );
};

export default Home;

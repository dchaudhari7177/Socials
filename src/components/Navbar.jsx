import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SocialNest</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Get Weather</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">Get News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/live-cricket-score">Live Cricket Score</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jokes">Read Jokes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tic-tac-toe">Tic-Tac-Toe</Link>
            </li>
            {/* Add more  */}
          </ul>
          <ToggleSwitch isDarkMode={isDarkMode} onToggle={handleToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';
import News from './components/News';
import LiveCricketScore from './components/LiveCricketScore';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/news" element={<News />} />
          <Route path="/live-cricket-score" element={<LiveCricketScore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

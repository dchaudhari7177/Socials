import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';
import News from './components/News';
import LiveCricketScore from './components/LiveCricketScore';
import Navbar from './components/Navbar';
import Jokes from './components/Jokes';
import TicTacToe from './components/TicTacToe';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/news" element={<News />} />
          <Route path="/live-cricket-score" element={<LiveCricketScore />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
        </div>
        <Footer/>
    </Router>
    
  );
};

export default App;

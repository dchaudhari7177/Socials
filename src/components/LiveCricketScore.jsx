import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveCricketScore.css';

const LiveCricketScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLiveScores = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.cricapi.com/v1/currentMatches?apikey=7ae7143f-8945-4661-a538-2f9f202540e1&offset=0');
      setMatches(response.data.data);
    } catch (error) {
      console.error('Error fetching live scores:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLiveScores();
  }, []);

  return (
    <div className="live-cricket-container">
      <h1 className="live-cricket-title">Live Cricket Scores</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="live-cricket-list">
          {matches.length > 0 ? (
            matches.map((match) => (
              <div key={match.id} className="match-card">
                <h2>{match.name}</h2>
                {match.status && <p>Status: {match.status}</p>}
                {match.score && match.score.map((score, index) => (
                  <div key={index} className="score-details">
                    <p>Inning: {score.inning}</p>
                    <p>Runs: {score.r}</p>
                    <p>Wickets: {score.w}</p>
                    <p>Overs: {score.o}</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No live matches available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveCricketScore;

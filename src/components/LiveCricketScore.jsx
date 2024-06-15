import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveCricketScore.css';

const LiveCricketScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = '7ae7143f-8945-4661-a538-2f9f202540e1'; 

  useEffect(() => {
    const fetchLiveCricketScores = async () => { 
      try { 
        const response = await axios.get(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`);
        console.log(response.data); 
        if (response.data && response.data.data) {
          setMatches(response.data.data);
        } else {
          setError('No match data available');
        }
      } catch (error) {
        console.error('Error fetching cricket scores:', error); 
        setError('Failed to fetch live cricket scores.');
      } finally {
        setLoading(false);
      }
    };

    fetchLiveCricketScores();
  }, [apiKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="live-cricket-score-container">
      <h2>Live Cricket Scores</h2>
      <div className="matches-container">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <h3>{match?.name ?? 'Match Name Unavailable'}</h3>
            <p>{match?.status ?? 'Status Unavailable'}</p>
            <p>{match?.teams?.a?.name ?? 'Team A'} vs {match?.teams?.b?.name ?? 'Team B'}</p>
            {match?.score?.full ? (
              <p>Score: {match.score.full}</p>
            ) : (
              <p>Score: Not available</p>
            )}
            <p>Overs: {match?.overs ?? 'Overs Unavailable'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCricketScore;

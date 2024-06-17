import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Jokes.css';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_ten');
      setJokes((prevJokes) => [...prevJokes, ...response.data]);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="jokes-container">
      <h1 className="jokes-title">Read Jokes</h1>
      {loading && jokes.length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="jokes-list">
          {jokes.map((joke) => (
            <div key={joke.id} className="joke-card">
              <h2>{joke.setup}</h2>
              <p>{joke.punchline}</p>
            </div>
          ))}
        </div>
      )}
      {!loading && (
        <button className="load-more-button" onClick={fetchJokes}>
          Load More Jokes
        </button>
      )}
    </div>
  );
};

export default Jokes;

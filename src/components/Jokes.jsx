import React, { useEffect, useState } from 'react';
import './Jokes.css';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten');
      const data = await response.json();
      setJokes(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jokes:', error);
      setLoading(false);
    }
  };

  const loadMoreJokes = async () => {
    setLoadingMore(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten');
      const data = await response.json();
      setJokes(prevJokes => [...prevJokes, ...data]);
      setLoadingMore(false);
    } catch (error) {
      console.error('Error fetching more jokes:', error);
      setLoadingMore(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Read Jokes</h2>
      <div className="row">
        {jokes.map(joke => (
          <div key={joke.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Setup: {joke.setup}</h5>
                <p className="card-text">Punchline: {joke.punchline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={loadMoreJokes} disabled={loadingMore}>
          {loadingMore ? 'Loading...' : 'Load More Jokes'}
        </button>
      </div>
    </div>
  );
};

export default Jokes;

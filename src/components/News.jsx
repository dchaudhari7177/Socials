import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '9041a7de1802430db40d73b5810b7126';
  const pageSize = 10; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`);
        if (response.data.articles) {
          setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Latest News</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={loadMore} className="load-more-btn">Load More</button>
      </div>
    </div>
  );
};

export default News;

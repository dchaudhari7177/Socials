import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '9041a7de1802430db40d73b5810b7126';
  const pageSize = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
        );
        if (response.data.articles.length > 0) {
          setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
        } else {
          console.log('No more articles available');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="news-container">
      <h2 className="news-heading">Latest News</h2>
      {articles.length > 0 ? (
        <>
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-link"
              >
                Read more
              </a>
            </div>
          ))}
          <div className="load-more-container">
            <button onClick={loadMore} className="load-more-btn">
              Load More
            </button>
          </div>
        </>
      ) : (
        <p className="no-news">No news articles available.</p>
      )}
    </div>
  );
};

export default News;

import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';
import Footer from './Footer';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '3e3e546e38846f06bc1e74ea591cc753';

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError('Failed to fetch weather data. Please check the city name.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-page">
      <div className="weather-container">
        <h2>Weather Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
            className="city-input"
          />
          <button type="submit" className="fetch-weather-btn">
            Get Weather
          </button>
        </form>
        {loading && <div>Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {weather && (
          <div className="weather-info">
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Weather;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SocialsNest</h1>
          <p>Your one-stop platform for the latest news, weather updates, live cricket scores, jokes, and more!</p>
          <Link to="/weather" className="hero-button">Get Started</Link>
        </div>
        <img src="https://images-platform.99static.com//bABwyPaSlYVZW-E95OkdmD00XZY=/221x221:780x781/fit-in/500x500/99designs-contests-attachments/129/129933/attachment_129933858" alt="Socials Hero" className="hero-image"/>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <img src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user" alt="Weather" />
            <h3>Weather Updates</h3>
            <p>Get the latest weather updates for your city.</p>
            <Link to="/weather" className="feature-button">Check Weather</Link>
          </div>
          <div className="feature">
            <img src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg" alt="News" />
            <h3>Latest News</h3>
            <p>Stay informed with the latest news from around the world.</p>
            <Link to="/news" className="feature-button">Read News</Link>
          </div>
          <div className="feature">
            <img src="https://play-lh.googleusercontent.com/UCQXKmZg3qOLL9Dkt9hFXo_m3a_NGlxqvf9gYxKZ0GXUuXXxw90k6qVVeejj1yYo_Z8" alt="Live Cricket Score" />
            <h3>Live Cricket Scores</h3>
            <p>Follow live cricket scores and updates.</p>
            <Link to="/live-cricket-score" className="feature-button">Live Scores</Link>
          </div>
          <div className="feature">
            <img src="https://play-lh.googleusercontent.com/kCuoLGcYqdmZN_TvKVYrUjuF2C8uua2rfY83anNJw7YGzijReQc3yTlsqzvMdxs03IM" alt="Jokes" />
            <h3>Read Jokes</h3>
            <p>Enjoy a good laugh with our collection of jokes.</p>
            <Link to="/jokes" className="feature-button">Read Jokes</Link>
          </div>
          <div className="feature">
            <img src="https://seeklogo.com/images/T/tic-tac-toe-logo-0D39D7E421-seeklogo.com.png" alt="Tic Tac Toe" />
            <h3>Tic Tac Toe</h3>
            <p>Play a classic game of Tic Tac Toe.</p>
            <Link to="/tic-tac-toe" className="feature-button">Play Now</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>Socials is your ultimate platform for staying updated and entertained. Whether you are looking for the latest news, weather updates, live sports scores, or just some fun and games, we've got you covered!</p>
      </section>
    </div>
  );
}

export default Home;
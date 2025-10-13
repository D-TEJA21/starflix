import React from 'react';
import { Container } from 'react-bootstrap';   // ✅ Added this import
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Homemovies from '../Components/HomeMovies';
import MovieSlide from '../Components/MovieSlide';
import Youtubeframe from '../Components/YoutubeFrame';

function Home({ setToken }) {
  return (
    <div>
      <Header />
      <MovieSlide />
      <Homemovies />
      <Youtubeframe />
    <Footer />

      
    </div>
  );
}

export default Home;

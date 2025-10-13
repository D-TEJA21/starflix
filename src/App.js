import {  HashRouter as BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './Pages/Login';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import HomeMovies from './Components/HomeMovies';
import TvShows from './Pages/TvShows';
import NewPopular from './Pages/NewPopular';
import Profile from './Pages/Profile';
import MovieDetails from './Pages/MovieDetails';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) setIsAuthenticated(true);
  }, [token]);

  return (
    <BrowserRouter basename="/starflix">
      <Routes>
        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* login */}
        <Route path="/login" element={<Login setToken={setToken} />} />

        {/* home */}
        <Route path="/home" element={<Home />} />

        {/* movies */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:slug" element={<MovieDetails />} />

        {/* movie details */}
        <Route path="/moviedetails" element={<MovieDetails />} />

        {/* tv shows */}
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshows/:slug" element={<MovieDetails />} />

        {/* new & popular */}
        <Route path="/popular" element={<NewPopular />} />

        {/* profile */}
        <Route path="/profile" element={<Profile />} />

        {/* home movies */}
        <Route path="/homemovies" element={<HomeMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <HashRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<Login setToken={setToken} />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Movies */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:slug" element={<MovieDetails />} />

        {/* TV Shows */}
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshows/:slug" element={<MovieDetails />} />

        {/* New & Popular */}
        <Route path="/popular" element={<NewPopular />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Home Movies */}
        <Route path="/homemovies" element={<HomeMovies />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

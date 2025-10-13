import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FaAngleRight, FaSearch } from 'react-icons/fa';
import '../Styles/Movies.css';
import PaginationBar from '../Components/PaginationBar';
import { useNavigate } from "react-router-dom";

// ✅ Movie Data
const allmovies = [
  // telugu movies
  { title: "RRR", image: process.env.PUBLIC_URL + "/Images/rrr1.jpg", language: "TELUGU" },
  { title: "SALAAR", image: process.env.PUBLIC_URL + "/Images/salaar.jpg", language: "TELUGU" },
  { title: "JERSEY", image: process.env.PUBLIC_URL + "/Images/jersey.jpg", language: "TELUGU" },
  { title: "JAANU", image: process.env.PUBLIC_URL + "/Images/jaanu2.webp", language: "TELUGU" },
  { title: "KALKI 2898-AD", image: process.env.PUBLIC_URL + "/Images/kalki1.webp", language: "TELUGU" },
  { title: "HIT The third case", image: process.env.PUBLIC_URL + "/Images/hit.webp", language: "TELUGU" },
  { title: "MAD SQUARE", image: process.env.PUBLIC_URL + "/Images/mad.png", language: "TELUGU" },

  // english movies
  { title: "OPPENHEIMER", image: process.env.PUBLIC_URL + "/Images/opp.webp", language: "ENGLISH" },
  { title: "AVATAR The way of water", image: process.env.PUBLIC_URL + "/Images/avatar.jpg", language: "ENGLISH" },
  { title: "AVENGERS", image: process.env.PUBLIC_URL + "/Images/av1.jpg", language: "ENGLISH" },
  { title: "PIRATES of The CARIBBEAN", image: process.env.PUBLIC_URL + "/Images/pi2.jpg", language: "ENGLISH" },
  { title: "INTERSTELLAR", image: process.env.PUBLIC_URL + "/Images/int1.png", language: "ENGLISH" },
  { title: "THE BATMAN", image: process.env.PUBLIC_URL + "/Images/bat2.jpg", language: "ENGLISH" },
  { title: "THE MEG", image: process.env.PUBLIC_URL + "/Images/meg1.webp", language: "ENGLISH" },

  // hindi movies
  { title: "DANGAL", image: process.env.PUBLIC_URL + "/Images/da.jpg", language: "HINDI" },
  { title: "FIGHTER", image: process.env.PUBLIC_URL + "/Images/fig1.webp", language: "HINDI" },
  { title: "PATHAAN", image: process.env.PUBLIC_URL + "/Images/pat1.jpg", language: "HINDI" },
  { title: "12 FAIL", image: process.env.PUBLIC_URL + "/Images/12.webp", language: "HINDI" },
  { title: "TIGER 3", image: process.env.PUBLIC_URL + "/Images/ti.webp", language: "HINDI" },
  { title: "KABIR SINGH", image: process.env.PUBLIC_URL + "/Images/ka.jpg", language: "HINDI" },
  { title: "CHHAAVA", image: process.env.PUBLIC_URL + "/Images/chhaava.png", language: "HINDI" },

  // tamil movies
  { title: "JAILER", image: process.env.PUBLIC_URL + "/Images/ja1.jpg", language: "TAMIL" },
  { title: "NILAVUKU EN MEL ENNADI KOBAM", image: process.env.PUBLIC_URL + "/Images/ni.jpg", language: "TAMIL" },
  { title: "DRAGON", image: process.env.PUBLIC_URL + "/Images/dr.jpg", language: "TAMIL" },
  { title: "TOURIST FAMILY", image: process.env.PUBLIC_URL + "/Images/tf3.jpg", language: "TAMIL" },
  { title: "VIKRAM", image: process.env.PUBLIC_URL + "/Images/vi1.jpg", language: "TAMIL" },
  { title: "AMARAN", image: process.env.PUBLIC_URL + "/Images/am.jpg", language: "TAMIL" },

  // malayalam movies
  { title: "MANJUMMEL BOYS", image: process.env.PUBLIC_URL + "/Images/ma1.jpg", language: "MALAYALAM" },
  { title: "GYMKHANA", image: process.env.PUBLIC_URL + "/Images/ga.jpg", language: "MALAYALAM" },
  { title: "AAVESHAM", image: process.env.PUBLIC_URL + "/Images/aa1.jpg", language: "MALAYALAM" },
];

const Movies = () => {
  const navigate = useNavigate();

  // ✅ States
  const [category, setCategory] = useState("MOVIE");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(20);

  // Slugify for URL
  const slugify = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  // Pagination calculation (for now, static)
  const totalMovies = allmovies.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Go to page:", page);
  };

  return (
    <div>
      <Header />

      {/* 🔹 Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="dropdown-wrapper">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="search-dropdown"
            >
              <option value="TV SHOW">TV SHOW</option>
              <option value="MOVIE">OTHERS</option>
            </select>
          </div>
          <input
            type="text"
            placeholder={`Search for a ${category.toUpperCase()} or celebrity...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      <section className='moviepage'>
        <div className='moviesheading'>
          <h1>MOVIES</h1>
          <p><a href="/home">HOME</a> <span><FaAngleRight /></span> MOVIES</p>
        </div>

        <div className='totalmovies'>
          <div className='foundtotal'>
            <p>Found <span>{totalMovies} movies</span> in total</p>
            <p>Sort by:</p>
          </div>
          <form>
            <select name='selection'>
              <option value="popularity descending">Popularity Descending</option>
              <option value="popularity ascending">Popularity Ascending</option>
              <option value="rating descending">Rating Descending</option>
              <option value="rating ascending">Rating Ascending</option>
              <option value="release asc">Release Date Ascending</option>
              <option value="release desc">Release Date Descending</option>
            </select>
          </form>
        </div>

        <div className='allcards'>
          {allmovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div
                className="hover-container"
                onClick={() => navigate(`/movies/${slugify(movie.title)}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={movie.image} alt={movie.title} />
                <div className="overlay">
                  <button className="hover-button">Read More</button>
                </div>
              </div>
              <h5>{movie.title}</h5>
            </div>
          ))}
        </div>

        {/* Pagination Component (make sure you have PaginationBar.jsx) */}
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          moviesPerPage={moviesPerPage}
          setMoviesPerPage={setMoviesPerPage}
          handlePageChange={handlePageChange}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Movies;

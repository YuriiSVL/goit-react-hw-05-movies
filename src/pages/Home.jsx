import { fetchMoviesByTrend } from 'api-services/fetchMoviesByTrend';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchMoviesByTrend().then(res => setMovies(res));
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <Link
            key={movie.id}
            to={`movies/${movie.id}`}
            state={{ from: location }}
          >
            <li>
              <img
                src={movie.poster_path && baseUrl + movie.poster_path}
                alt={movie.title}
              />
              {movie.title || movie.name}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;

import { fetchMoviesByTrend } from 'api-services/fetchMoviesByTrend';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesByTrend().then(res => setMovies(res));
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <ul>
        {movies.map(movie => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <li>
              <img src={baseUrl + movie.poster_path} alt={movie.title} />
              {movie.title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;

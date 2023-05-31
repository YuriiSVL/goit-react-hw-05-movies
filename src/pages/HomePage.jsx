import { fetchMoviesByTrend } from 'api-services/fetchMoviesByTrend';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchMoviesByTrend().then(res => setMovies(res));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} location={location} path={`movies/`} />
    </>
  );
};

export default HomePage;

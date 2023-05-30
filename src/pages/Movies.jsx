import { useEffect, useState } from 'react';
import { fetchMoviesBySearch } from 'api-services/fetchMoviesBySearch';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      fetchMoviesBySearch(query).then(res => setMovie(res));
    }
  }, [query]);

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <>
        <ul>
          {movies.map(movie => (
            <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
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
    </>
  );
};

export default Movies;

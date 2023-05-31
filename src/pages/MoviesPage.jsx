import { useEffect, useState } from 'react';
import { fetchMoviesBySearch } from 'api-services/fetchMoviesBySearch';
import { useSearchParams, useLocation } from 'react-router-dom';
import MovieList from 'components/movieList/MovieList';
import SearchForm from 'components/searchForm/SearchForm';

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
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Movies;

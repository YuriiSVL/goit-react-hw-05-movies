import { useEffect, useState } from 'react';
import { fetchMoviesBySearch } from 'api-services/fetchMoviesBySearch';
import { useSearchParams, Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (searchQuery) {
      fetchMoviesBySearch(searchQuery).then(res => setMovie(res));
    }
  }, [searchQuery]);

  // const updateQueryString = e => {
  //   if (e.target.value === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ searchQuery: e.target.value });
  // };
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // fetchMoviesBySearch(searchQuery).then(res => setMovie(res));
    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuery: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          // value={searchQuery}
          // onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <>
        <ul>
          {movies.map(movie => (
            <Link key={movie.id} to={`${movie.id}`}>
              <li>
                <img src={baseUrl + movie.poster_path} alt={movie.title} />
                {movie.title}
              </li>
            </Link>
          ))}
        </ul>
      </>
    </>
  );
};

export default Movies;

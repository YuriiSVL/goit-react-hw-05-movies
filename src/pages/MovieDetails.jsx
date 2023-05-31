import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesById } from 'api-services/fetchMoviesById';
import { Link } from 'react-router-dom';
import MovieDetails from 'components/movieDetails/MovieDetails';
import GoBackButton from 'components/goBackButton/GoBackButton';

const MovieDatails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      <GoBackButton backLinkLocationRef={backLinkLocationRef.current} />
      {/* <Link to={backLinkLocationRef.current}>Go back</Link> */}
      <MovieDetails movie={movie} />
      {/* <div>
        <img
          src={movie.poster_path && baseUrl + movie.poster_path}
          alt={movie.title || movie.name}
        />
        <h1>{movie.title || movie.name}</h1>
        <p>User score: {Math.round(movie.popularity)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Geners</h3>
        <p></p>
        {movie.genres && (
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviwes'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div> */}
    </>
  );
};

export default MovieDatails;

import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/movieDetails/MovieDetails.module.css';

const MovieDatails = ({ movie }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <div className={css.container}>
        <img
          src={movie.poster_path && baseUrl + movie.poster_path}
          alt={movie.title || movie.name}
        />
        <div className={css.movieInformation}>
          <h1>{movie.title || movie.name}</h1>
          <p>
            User score:{' '}
            {movie.vote_average &&
              Math.round(movie.vote_average.toFixed(2) * 10)}
            %
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Geners</h3>
          {movie.genres && (
            <ul className={css.genreList}>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}

          <h4>Additional information</h4>
          <ul className={css.aditionalInformationLink}>
            <li>
              <NavLink to={'cast'}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={'reviwes'}>Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDatails;

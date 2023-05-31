import { Link } from 'react-router-dom';
import css from 'components/movieList/MovieList.module.css';

const MovieList = ({ movies, location, path = '' }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={path + `${movie.id}`}
          state={{ from: location }}
        >
          <li className={css.item}>
            <img
              src={
                movie.poster_path
                  ? baseUrl + movie.poster_path
                  : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
              }
              alt={movie.title}
            />
            <h3>{movie.title || movie.name}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;

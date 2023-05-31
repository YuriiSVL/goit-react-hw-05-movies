import { fetchMoviesCast } from 'api-services/fetchMovieCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/cast/Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    fetchMoviesCast(movieId)
      .then(res => setCast(res))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.id} className={css.item}>
          <img
            src={actor.profile_path && baseUrl + actor.profile_path}
            alt={actor.name}
          />
          <h2 className={css.actorTitle}>{actor.name}</h2>
          <p className={css.actorText}>Charecter: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

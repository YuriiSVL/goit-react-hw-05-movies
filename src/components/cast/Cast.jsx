import { fetchMoviesCast } from 'api-services/fetchMovieCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={actor.profile_path && baseUrl + actor.profile_path}
            alt={actor.name}
          />
          <h2>{actor.name}</h2>
          <p>Charecter: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

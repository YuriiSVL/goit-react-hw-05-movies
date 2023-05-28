import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'api-services/fetchMoviesById';

const MovieDatails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  //   console.log(movie.genres.map(genre => genre.name));

  return (
    <div>
      <img src={baseUrl + movie.poster_path} alt={movie.title || movie.name} />
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
    </div>
  );
};

export default MovieDatails;

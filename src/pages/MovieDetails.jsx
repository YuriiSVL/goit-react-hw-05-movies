import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMoviesById } from 'api-services/fetchMoviesById';
import MovieDetails from 'components/movieDetails/MovieDetails';
import GoBackButton from 'components/goBackButton/GoBackButton';

const MovieDatails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      <GoBackButton backLinkLocationRef={backLinkLocationRef.current} />
      <MovieDetails movie={movie} />
    </>
  );
};

export default MovieDatails;

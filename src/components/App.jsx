import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from './cast/Cast';
// import Reviews from './reviews/Reviews';
import { lazy } from 'react';

export const App = () => {
  const Home = lazy(() => import('../pages/HomePage'));
  const Movies = lazy(() => import('../pages/MoviesPage'));
  const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
  const Cast = lazy(() => import('../components/cast/Cast'));
  const Reviews = lazy(() => import('../components/reviews/Reviews'));
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="movies"
          element={
            <div>
              <Movies />
            </div>
          }
        />

        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviwes" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

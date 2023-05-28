import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDatails from 'pages/MovieDetails';
import Layout from './layout/Layout';

export const App = () => {
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
        <Route path="movies/:movieId" element={<MovieDatails />} />
      </Route>
    </Routes>
  );
};

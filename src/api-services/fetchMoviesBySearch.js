import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '31a8ef80bd42f9d6ae436f1a3ce6195b';

export const fetchMoviesBySearch = async query => {
  const responce = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return responce.data.results;
};

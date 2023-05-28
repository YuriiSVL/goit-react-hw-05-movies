import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '31a8ef80bd42f9d6ae436f1a3ce6195b';

export const fetchMoviesById = async id => {
  const responce = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  //   console.log(responce.data);
  return responce.data;
};

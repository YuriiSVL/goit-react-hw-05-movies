import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '31a8ef80bd42f9d6ae436f1a3ce6195b';

export const fetchMoviesByTrend = async () => {
  const responce = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  //   console.log(responce.data.results);
  return responce.data.results;
};

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL,
});

export default instance;

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://imdb-api.com/en/API';

const instance = axios.create({
  baseURL,
});

export default instance;

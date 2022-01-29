import api from './api';

export default class MovieApi {
  static getTopMovies() {
    return api.get(`/Top250Movies/${process.env.REACT_APP_IMDB_KEY}`);
  }
}

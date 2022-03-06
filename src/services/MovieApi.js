import api from './api';

export default class MovieApi {
  static getTopMovies() {
    return api.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  }

  static getTopTVShows() {
    return api.get(`/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  }
}

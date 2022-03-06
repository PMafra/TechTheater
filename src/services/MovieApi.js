import api from './api';

export default class MovieApi {
  static getTopMovies() {
    return api.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY || '42d64c468b8cfea6b4f07625d1ec5937'}`);
  }

  static getTopTVShows() {
    return api.get(`/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY || '42d64c468b8cfea6b4f07625d1ec5937'}`);
  }

  static configURL() {
    return api.get(`/configuration?api_key=${process.env.REACT_APP_TMDB_KEY || '42d64c468b8cfea6b4f07625d1ec5937'}`);
  }

  static getMovieInfo(movieId) {
    return api.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY || '42d64c468b8cfea6b4f07625d1ec5937'}`);
  }

  static getTVShowInfo(showId) {
    return api.get(`/tv/${showId}?api_key=${process.env.REACT_APP_TMDB_KEY || '42d64c468b8cfea6b4f07625d1ec5937'}`);
  }
}

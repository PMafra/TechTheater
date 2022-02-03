import api from './api';

export default class MovieApi {
  static getTopMovies() {
    return api.get(`/MostPopularMovies/${process.env.REACT_APP_IMDB_KEY || 'k_0bxzff2h'}`);
  }

  static getTopTVShows() {
    return api.get(`/MostPopularTvs/${process.env.REACT_APP_IMDB_KEY || 'k_0bxzff2h'}`);
  }
}

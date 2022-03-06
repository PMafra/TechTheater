/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useState,
  useEffect,
} from 'react';
import MovieApi from '../services/MovieApi';

const MovieConfigContext = createContext();

export default MovieConfigContext;

export function MovieConfigProvider({ children }) {
  const [movieConfig, setMovieConfig] = useState(null);

  const obtainConfigVariables = () => {
    MovieApi.configURL()
      .then((res) => {
        console.log(res.data);
        setMovieConfig(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    obtainConfigVariables();
  }, []);

  if (!movieConfig) {
    return ('');
  }

  return (
    <MovieConfigContext.Provider value={{ movieConfig }}>
      {children}
    </MovieConfigContext.Provider>
  );
}

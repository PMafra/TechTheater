import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieApi from '../../../services/MovieApi';

export default function Recommendations() {
  const [moviesList, setMoviesList] = useState('');

  const obtainMoviesList = () => {
    MovieApi.getTopMovies()
      .then((res) => {
        setMoviesList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    obtainMoviesList();
  }, []);

  if (!moviesList) {
    return (
      <>
        loading
      </>
    );
  }

  return (
    <Hey>
      {moviesList?.map((movie) => (movie.title))}
      Hey !!!
    </Hey>
  );
}

const Hey = styled.div`
    font-size: 40px;
    color: #000000;
    background-color: orange;
`;

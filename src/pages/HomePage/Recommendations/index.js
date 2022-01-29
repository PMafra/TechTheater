import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieApi from '../../../services/MovieApi';

export default function Recommendations() {
  const [moviesList, setMoviesList] = useState('');
  const [TVShowsList, setTVShowsList] = useState('');

  const obtainMoviesList = () => {
    MovieApi.getTopMovies()
      .then((res) => {
        setMoviesList(res.data.items.filter((item, i) => i < 15));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const obtainTVShowsList = () => {
    MovieApi.getTopTVShows()
      .then((res) => {
        setTVShowsList(res.data.items.filter((item, i) => i < 15));
        console.log(res.data.items.filter((item, i) => i < 15));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    obtainMoviesList();
    obtainTVShowsList();
  }, []);

  if (!moviesList || !TVShowsList) {
    return (
      <>
        loading
      </>
    );
  }

  return (
    <>
      <ListTitle>
        Title
      </ListTitle>
      <MoviesList>
        {moviesList?.map((movie) => (
          <Movie key={movie.id}>
            <img src={movie.image} alt="" />
            {movie.title}
          </Movie>
        ))}
      </MoviesList>
      <ListTitle>
        Title
      </ListTitle>
      <MoviesList>
        {TVShowsList?.map((show) => (
          <Movie key={show.id}>
            {show.title}
          </Movie>
        ))}
      </MoviesList>
    </>
  );
}

const ListTitle = styled.h1`
  color: #ffffff;
  font-size: 30px;
`;

const MoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: scroll;
  overflow-y: hidden;
`;

const Movie = styled.li`
  height: 150px;
  color: #ffffff;
  background-color: red;
  img {
    width: 100px;
  }
`;

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieApi from '../../../services/MovieApi';
import MovieBox from '../../../components/HomePage/Movie';

export default function Recommendations() {
  const [moviesList, setMoviesList] = useState('');
  const [TVShowsList, setTVShowsList] = useState('');

  const obtainMoviesList = () => {
    MovieApi.getTopMovies()
      .then((res) => {
        console.log(res.data);
        setMoviesList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const obtainTVShowsList = () => {
    MovieApi.getTopTVShows()
      .then((res) => {
        console.log(res.data);
        setTVShowsList(res.data.results);
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
      <Loading>
        loading
      </Loading>
    );
  }

  return (
    <RecommendationsContainer>
      <SectionContainer>
        <ListTitle>
          Popular Movies
        </ListTitle>
        <MoviesList>
          {moviesList?.map(({ id, poster_path: posterPath, title }) => (
            <MovieBox
              key={id}
              id={id}
              posterPath={posterPath}
              title={title}
              type="movie"
            />
          ))}
        </MoviesList>
      </SectionContainer>
      <SectionContainer>
        <ListTitle>
          Popular TV Shows
        </ListTitle>
        <MoviesList>
          {TVShowsList?.map(({ id, poster_path: posterPath, name }) => (
            <MovieBox
              key={id}
              id={id}
              posterPath={posterPath}
              title={name}
              type="tv"
            />
          ))}
        </MoviesList>
      </SectionContainer>
    </RecommendationsContainer>
  );
}

const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Loading = styled.div`
  font-size: 30px;
  color: #ffffff;
`;

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
  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: #fff;
  }
`;

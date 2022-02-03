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
      <Loading>
        loading
      </Loading>
    );
  }

  return (
    <RecommendationsContainer>
      <SectionContainer>
        <ListTitle>
          Movies
        </ListTitle>
        <MoviesList>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          {moviesList?.map(({ id, image, title }) => (
            <MovieBox key={id} image={image} title={title} />
          ))}
        </MoviesList>
      </SectionContainer>
      <SectionContainer>
        <ListTitle>
          TV Shows
        </ListTitle>
        <MoviesList>
          {TVShowsList?.map(({ id, image, title }) => (
            <MovieBox key={id} image={image} title={title} />
          ))}
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
          <Movie>
            <div>oi</div>
            <h2>Titulo</h2>
          </Movie>
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

const Movie = styled.li`
  div {
    width: 150px;
    height: 200px;
    background-color: red;
  }
`;

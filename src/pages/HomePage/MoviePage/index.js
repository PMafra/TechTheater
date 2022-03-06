import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieAPI from '../../../services/MovieApi';
import MovieConfigContext from '../../../store/MovieConfigContext';

export default function MoviePage() {
  const { movieId, showId } = useParams();
  const [movieInfo, setMovieInfo] = useState('');
  const { movieConfig } = useContext(MovieConfigContext);

  const obtainMovieInfo = () => {
    MovieAPI.getMovieInfo(movieId)
      .then((res) => {
        console.log(res.data);
        setMovieInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const obtainTVShowInfo = () => {
    MovieAPI.getTVShowInfo(showId)
      .then((res) => {
        console.log(res.data);
        setMovieInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (movieId) {
      obtainMovieInfo();
    }
    if (showId) {
      obtainTVShowInfo();
    }
  }, []);

  if (!movieConfig || !movieInfo) {
    return (<Loading>Loading</Loading>);
  }

  return (
    <PageContainer>
      <MovieBackground>
        <img src={`${movieConfig.images.base_url}original/${movieInfo.backdrop_path}`} alt="" />
      </MovieBackground>
      <Title>
        {movieInfo.original_title || movieInfo.original_name}
      </Title>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MovieBackground = styled.div`
    img {
      object-fit: cover;
      width: 100%;
      height: 300px;
      background-color: blue;
      @media (max-width: 600px) {
          height: 200px;
      }
    }
`;

const Title = styled.h1`
    width: 100%;
    font-size: 40px;
    background-color: green;
    padding: 10px 0;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

const Loading = styled.div`
  font-size: 30px;
  color: #ffffff;
`;

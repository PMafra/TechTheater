import styled from 'styled-components';

export default function MoviePage() {
  return (
    <PageContainer>
      <MovieBackground>
        Big image here
      </MovieBackground>
      <Title>
        Movie Title Here!
      </Title>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MovieBackground = styled.div`
    width: 100%;
    height: 300px;
    background-color: blue;
    @media (max-width: 600px) {
        height: 200px;
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

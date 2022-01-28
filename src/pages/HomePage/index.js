import styled from 'styled-components';
import { useEffect } from 'react';
import {
  Route,
  useLocation,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Recommendations from './Recommendations/index';
import HomePageLayout from '../../components/layouts/HomePage';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const baseRedirect = () => {
    if (location.pathname === '/homepage') {
      navigate('/homepage/recommendations');
    }
  };

  useEffect(() => {
    baseRedirect();
  });

  return (
    <HomePageLayout background="urlSrc">

      <Container>
        <Routes>
          <Route
            path={`${location.pathname}/recommendations`}
            exact
            element={<Recommendations />}
          />

        </Routes>
      </Container>
    </HomePageLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: blue;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;

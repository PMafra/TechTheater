import styled from 'styled-components';
import {
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Recommendations from './Recommendations/index';
import HomePageLayout from '../../components/layouts/HomePage';

export default function HomePage() {
  const { pathname } = useLocation();

  return (
    <HomePageLayout background="urlSrc">

      <Container>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`${pathname}/recommendations`} />}
          />
          <Route
            exact
            path="/recommendations"
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

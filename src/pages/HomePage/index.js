import {
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Recommendations from './Recommendations/index';
import HomePageLayout from '../../components/layouts/HomePage';
import Navbar from '../../components/HomePage/Navbar';
import MoviePage from './MoviePage/index';

export default function HomePage() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <HomePageLayout>
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
          <Route
            exact
            path="/recommendations/:movieId"
            element={<MoviePage />}
          />
        </Routes>
      </HomePageLayout>
    </>
  );
}

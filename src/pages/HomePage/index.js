import {
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Recommendations from './Recommendations/index';
import HomePageLayout from '../../components/layouts/HomePage';
import Navbar from '../../components/HomePage/Navbar';

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
        </Routes>
      </HomePageLayout>
    </>
  );
}

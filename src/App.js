/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import HomePage from './pages/HomePage/index';
import EntryPage from './pages/EntryPage/index';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
        </Routes>
        <Routes>
          <Route path="/homepage/*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

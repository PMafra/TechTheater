/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import TransitionStyle from './assets/styles/TransitionStyle';
import ExampleContext from './store/ExampleContext';

export default function App() {
  const [example, setExample] = useState('');

  return (
    <ExampleContext.Provider value={{
      example, setExample,
    }}
    >
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </ExampleContext.Provider>
  );
}

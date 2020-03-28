import React from 'react';
import { ThemeProvider } from 'styled-components';

import userPeristedState from '~/util/usePersistedState';

import { ToastContainer } from 'react-toastify';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

function App() {
  const [theme, setTheme] = userPeristedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes toggleTheme={toggleTheme} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

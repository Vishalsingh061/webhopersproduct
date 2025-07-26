import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import store from './redux/store';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
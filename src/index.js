import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';



// Define what props.theme will look like
const theme = {
  green: '#02be6e',
  blackLight: '#02be6e',
};


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


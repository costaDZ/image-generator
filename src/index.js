import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

import GlobalStyle from './styles/globalStyles';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';



const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>

    <PersistGate
      persistor={persistor}>

      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>

    </PersistGate>


  </React.StrictMode>,
  document.getElementById('root')
);


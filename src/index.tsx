import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
////import GlobalStyle from './styles/globalStyles';
import { persistStore } from 'redux-persist';
////import { PersistGate } from 'redux-persist/lib/integration/react';

const store = configureStore();
//const persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      {/* <GlobalStyle /> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate persistor={persistor}> */}
//       {/* <GlobalStyle /> */}
//       <App />
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

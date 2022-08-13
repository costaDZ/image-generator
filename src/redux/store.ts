import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

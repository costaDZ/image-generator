import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers/index';

import { combineReducers, Reducer } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

export const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const store = configureStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export type ThunkDispatchType = ThunkDispatch<RootState, null, AnyAction>;

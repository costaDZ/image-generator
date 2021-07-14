import { combineReducers } from 'redux';

import { nav } from './nav.reducer';


const reducers = {
    nav,
};


export const rootReducer = combineReducers(reducers);



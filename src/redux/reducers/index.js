import { combineReducers } from 'redux';

import { nav } from './reducers';

const reducers = {
    nav,
};


export const rootReducer = combineReducers(reducers);



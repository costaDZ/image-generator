import { combineReducers } from 'redux';

import {
    nav,
    images,
    // photos,
    // vectors,
    // illistrations,
    videos
} from './reducers';


const reducers = {
    nav,
    images,
    // photos,
    // vectors,
    // illistrations,
    videos
};


export const rootReducer = combineReducers(reducers);



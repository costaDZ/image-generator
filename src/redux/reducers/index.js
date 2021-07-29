import { combineReducers } from 'redux';

import {
    nav,
    images,
    photos,
    vectors,
    illistrator,
    videos
} from './reducers';


const reducers = {
    nav,
    images,
    photos,
    vectors,
    illistrator,
    videos
};


export const rootReducer = combineReducers(reducers);



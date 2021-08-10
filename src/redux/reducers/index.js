import { combineReducers } from 'redux';

import {
    nav,
    images,
    videos,
    menuBtn,
} from './reducers';


const reducers = {
    nav,
    images,
    videos,
    menuBtn,
};


export const rootReducer = combineReducers(reducers);



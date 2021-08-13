import { combineReducers } from 'redux';

import {
    nav,
    images,
    videos,
    menuBtn,
} from './reducers';

import {
    likedItem
} from './collection';

const reducers = {
    nav,
    images,
    videos,
    menuBtn,
    likedItem,
};


export const rootReducer = combineReducers(reducers);



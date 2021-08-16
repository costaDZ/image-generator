import { combineReducers } from 'redux';

import {
    nav,
    images,
    videos,
    menuBtn,
} from './reducers';

import {
    likedItem,
    myCollection,
} from './collectionsReducer';


import {
    download,
} from './downloadReducer.js';

const reducers = {
    nav,
    images,
    videos,
    menuBtn,
    likedItem,
    myCollection,
    download,
};


export const rootReducer = combineReducers(reducers);



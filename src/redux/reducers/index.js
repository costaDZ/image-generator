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
    download,
} from './collectionsReducer';

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



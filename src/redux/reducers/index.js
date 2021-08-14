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

const reducers = {
    nav,
    images,
    videos,
    menuBtn,
    likedItem,
    myCollection,
};


export const rootReducer = combineReducers(reducers);



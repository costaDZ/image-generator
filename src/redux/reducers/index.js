import { combineReducers } from 'redux';

import {
    nav,
    main,
    photos,
    vectors,
    illistrations,
    videos
} from './reducers';


const reducers = {
    nav,
    main,
    photos,
    vectors,
    illistrations,
    videos
};


export const rootReducer = combineReducers(reducers);



import { combineReducers } from 'redux';

import { nav, images, photos, vectors, illistrator } from './reducers';

const reducers = {
    nav,
    images,
    photos,
    vectors,
    illistrator,
};


export const rootReducer = combineReducers(reducers);



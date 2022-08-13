import { combineReducers } from 'redux';

import { nav, content, menuBtn } from './reducers';

import { likedItem, myCollection } from './collectionsReducer';

import { download } from './downloadReducer';

const reducers = {
  nav,
  content,
  menuBtn,
  likedItem,
  myCollection,
  download
};

export const rootReducer = combineReducers(reducers);

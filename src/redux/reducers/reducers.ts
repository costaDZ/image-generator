import {
  ActionType,
  ChangePageAction,
  LoadImageInProgressAction,
  LoadImagesSuccessAction,
  LoadVideosSuccessAction,
  ToggelMenuAction
} from './../actions/actions-types';

import data from '../../data/data.js';

const initialState = data;

export const nav = (state = initialState, actions: ChangePageAction) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.CHANGE_PAGE: {
      return initialState[payload];
    }
    default:
      return state;
  }
};

export const content = (
  state = { isLoading: true },
  actions: LoadImageInProgressAction | LoadImagesSuccessAction | LoadVideosSuccessAction
) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.LOAD_IMAGES_IN_PROGRESS:
      return { ...state, isLoading: true };
    case ActionType.LOAD_IMAGES_SUCCESS:
    case ActionType.LOAD_VIDEOS_SUCCESS: {
      const { kind, searchKey, pageNumber, perPage, hits, total, totalHits } = payload;
      return { kind, searchKey, pageNumber, perPage, isLoading: false, hits, total, totalHits };
    }
    default:
      return state;
  }
};

export const menuBtn = (state: any, actions: ToggelMenuAction) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.TOGGLE_MENU:
      if (payload === 'close') {
        return { ...state, menuBtn: false };
      } else {
        return { ...state, menuBtn: !state.menuBtn };
      }
    default:
      return state;
  }
};

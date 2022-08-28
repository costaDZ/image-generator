import {
  ActionType,
  ChangePageAction,
  LoadImageInProgressAction,
  LoadImagesSuccessAction,
  LoadVideosSuccessAction,
  ToggelMenuAction
} from './../actions/actions-types';

import data, { initialContent } from '../../data/data';

const initialState = data;

export const nav = (state: Section = initialState.all, actions: ChangePageAction) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.CHANGE_PAGE: {
      return { ...initialState[payload] };
    }
    default:
      return state;
  }
};

export const content = (
  state = initialContent,
  actions: LoadImageInProgressAction | LoadImagesSuccessAction | LoadVideosSuccessAction
): Content => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.LOAD_IMAGES_IN_PROGRESS:
      return { ...state, isLoading: true };
    case ActionType.LOAD_IMAGES_SUCCESS:
    case ActionType.LOAD_VIDEOS_SUCCESS: {
      const { kind, searchKey, pageNumber, perPage, hits, total, totalHits, pic } = payload;
      return {
        kind,
        searchKey,
        pageNumber,
        perPage,
        isLoading: false,
        hits,
        total,
        totalHits,
        pic
      };
    }
    default:
      return state;
  }
};

const menuBtnInitialState = {
  menuBtn: false
};

export const menuBtn = (state = menuBtnInitialState, actions: ToggelMenuAction) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.TOGGLE_MENU:
      if (payload === 'close') {
        return { menuBtn: false };
      } else {
        return { menuBtn: !state };
      }
    default:
      return state;
  }
};

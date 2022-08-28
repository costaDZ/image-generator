import { ActionType } from './actions-types';

export const changePage = (page: string) => ({
  type: ActionType.CHANGE_PAGE,
  payload: page
});

export const loadImagesInProgress = () => ({
  type: ActionType.LOAD_IMAGES_IN_PROGRESS
});

export const loadImagesSuccess = (
  kind: string,
  searchKey: string,
  pageNumber: number,
  perPage: number,
  hits: Hit[],
  total: number,
  totalHits: number
) => ({
  type: ActionType.LOAD_IMAGES_SUCCESS,
  payload: { kind, searchKey, pageNumber, perPage, hits, total, totalHits }
});

export const loadVideosSuccess = (
  kind: string,
  searchKey: string,
  pageNumber: number,
  perPage: number,
  hits: Hit[],
  total: number,
  totalHits: number
) => ({
  type: ActionType.LOAD_VIDEOS_SUCCESS,
  payload: { kind, searchKey, pageNumber, perPage, hits, total, totalHits }
});

export const toggelMenu = (action: 'close' | 'toggle') => ({
  type: ActionType.TOGGLE_MENU,
  payload: action
});

export const handelLikedImages = (item: Hit) => ({
  type: ActionType.HANDEL_LIKED_IMAGES,
  payload: item
});

export const addToCollection = (item: Hit) => ({
  type: ActionType.HANDEL_COLLECTION,
  payload: item
});

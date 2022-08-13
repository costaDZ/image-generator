export enum ActionType {
  CHANGE_PAGE = 'CHANGE_PAGE',
  LOAD_IMAGES_IN_PROGRESS = 'LOAD_IMAGES_IN_PROGRESS',
  LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS',
  LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS',
  TOGGLE_MENU = 'TOGGLE_MENU',
  HANDEL_LIKED_IMAGES = 'HANDEL_LIKED_IMAGES',
  HANDEL_COLLECTION = 'ADD_TO_COLLECTION',
  ADD_TO_DOWNLOAD = 'ADD_TO_DOWNLOAD',
  TOGGLE_DOWNLOAD_SIZES = 'TOGGLE_DOWNLOAD_SIZES'
}

export interface ChangePageAction {
  type: typeof ActionType.CHANGE_PAGE;
  payload: Page;
}

export interface LoadImageInProgressAction {
  type: typeof ActionType.LOAD_IMAGES_IN_PROGRESS;
  payload: null;
}

export interface LoadImagesSuccessAction {
  type: typeof ActionType.LOAD_IMAGES_SUCCESS;
  payload: any;
}

export interface LoadVideosSuccessAction {
  type: typeof ActionType.LOAD_VIDEOS_SUCCESS;
  payload: any;
}

export interface ToggelMenuAction {
  type: typeof ActionType.TOGGLE_MENU;
  payload: 'close' | 'toggle';
}

export interface HandelLikedImagesAction {
  type: typeof ActionType.HANDEL_LIKED_IMAGES;
  payload: Hit;
}

export interface AddToCollectionAction {
  type: typeof ActionType.HANDEL_COLLECTION;
  payload: Hit;
}

export interface AddToDownloadAction {
  type: typeof ActionType.ADD_TO_DOWNLOAD;
  payload: {
    item: Hit;
  };
}

export interface ToggelDownloadSizeAction {
  type: typeof ActionType.TOGGLE_DOWNLOAD_SIZES;
  payload: string;
}

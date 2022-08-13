import { ActionType } from './actions-types';

export const addToDownload = (item: Hit) => ({
  type: ActionType.ADD_TO_DOWNLOAD,
  payload: { item }
});

export const toggleDownloadSizes = (action: string) => ({
  type: ActionType.TOGGLE_DOWNLOAD_SIZES,
  payload: action
});

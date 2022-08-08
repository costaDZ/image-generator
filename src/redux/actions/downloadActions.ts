import { ActionType } from './actions-types';

export const addToDownload = (item: any) => ({
  type: ActionType.ADD_TO_DOWNLOAD,
  payload: { item }
});

export const toggleDownloadSizes = (action: any) => ({
  type: ActionType.TOGGLE_DOWNLOAD_SIZES,
  payload: action
});

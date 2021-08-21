export const ADD_TO_DOWNLOAD = 'ADD_TO_DOWNLOAD';
export const addToDownload = item => ({
    type: ADD_TO_DOWNLOAD,
    payload: { item },
});


export const TOGGLE_DOWNLOAD_SIZES = 'TOGGLE_DOWNLOAD_SIZES';
export const toggleDownloadSizes = action => ({
    type: TOGGLE_DOWNLOAD_SIZES,
    payload: action,
});

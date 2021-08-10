export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page,
})

export const LOAD_IMAGES_IN_PROGRESS = 'LOAD_IMAGES_IN_PROGRESS';
export const loadImagesInProgress = () => ({
    type: LOAD_IMAGES_IN_PROGRESS,
});


export const LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS';
export const loadImagesSuccess = (kind, images, searchKey, pageNumber, perPage) => ({
    type: LOAD_IMAGES_SUCCESS,
    payload: { kind, images, searchKey, pageNumber, perPage }
});


export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS';
export const loadVideosSuccess = (videos, searchKey, pageNumber, perPage) => ({
    type: LOAD_VIDEOS_SUCCESS,
    payload: { videos, searchKey, pageNumber, perPage }
});


export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggelMenu = (action) => ({
    type: TOGGLE_MENU,
    payload: action,
})
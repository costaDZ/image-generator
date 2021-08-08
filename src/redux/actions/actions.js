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


// export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
// export const loadPhotosSuccess = (photos, searchKey, page) => ({
//     type: LOAD_PHOTOS_SUCCESS,
//     payload: { photos, searchKey, page }
// });

// export const LOAD_VECTOR_SUCCESS = 'LOAD_VECTOR_SUCCESS';
// export const loadVectorSuccess = (vectors, searchKey, page) => ({
//     type: LOAD_VECTOR_SUCCESS,
//     payload: { vectors, searchKey, page }
// });

// export const LOAD_ILISTRATOR_SUCCESS = 'LOAD_ILISTRATOR_SUCCESS';
// export const loadIlistratorSuccess = (illistrators, searchKey, page) => ({
//     type: LOAD_ILISTRATOR_SUCCESS,
//     payload: { illistrators, searchKey, page }
// });

export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS';
export const loadVideosSuccess = (videos, searchKey, pageNumber, perPage) => ({
    type: LOAD_VIDEOS_SUCCESS,
    payload: { videos, searchKey, pageNumber, perPage }
});

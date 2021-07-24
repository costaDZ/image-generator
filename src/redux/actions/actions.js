export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    payload: page,
})


// export const FETCH_IMAGES = 'FETCH_IMAGES';
// export const fetchImages = () => ({
//     type: FETCH_IMAGES,
// });

export const LOAD_IMAGES_IN_PROGRESS = 'LOAD_IMAGES_IN_PROGRESS';
export const loadImagesInProgress = () => ({
    type: LOAD_IMAGES_IN_PROGRESS,
});


export const LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS';
export const loadImagesSuccess = images => ({
    type: LOAD_IMAGES_SUCCESS,
    payload: { images },
});


export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
export const loadPhotosSuccess = photos => ({
    type: LOAD_PHOTOS_SUCCESS,
    payload: { photos }
});

export const LOAD_VECTOR_SUCCESS = 'LOAD_VECTOR_SUCCESS';
export const loadVectorSuccess = vectors => ({
    type: LOAD_VECTOR_SUCCESS,
    payload: { vectors }
});

export const LOAD_ILISTRATOR_SUCCESS = 'LOAD_ILISTRATOR_SUCCESS';
export const loadIlistratorSuccess = illistrators => ({
    type: LOAD_ILISTRATOR_SUCCESS,
    payload: { illistrators }
});


export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS';
export const loadVideosSuccess = videos => ({
    type: LOAD_VIDEOS_SUCCESS,
    payload: { videos }
});

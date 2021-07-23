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




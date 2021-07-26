import {
    loadImagesSuccess,
    loadImagesInProgress,
    loadPhotosSuccess,
    loadVectorSuccess,
    loadIlistratorSuccess,
    loadVideosSuccess,
} from '../actions/actions.js';


const key = process.env.REACT_APP_KEY;
const url = 'https://pixabay.com/api/?key=';



export const loadImages = () => async (dispatch, images) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + key + '&q=fog');
        const images = await response.json();
        dispatch(loadImagesSuccess(images));
    } catch (error) {
        console.log(error);
    }
}

export const loadPhotos = () => async (dispatch, photos) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + key + '&image_type=photo');
        const photos = await response.json();
        dispatch(loadPhotosSuccess(photos));
    } catch (error) {
        console.log(error);
    }
}

export const loadVectors = () => async (dispatch, vectors) => {

    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + key + '&image_type=vector');
        const vectors = await response.json();
        dispatch(loadVectorSuccess(vectors));
    } catch (error) {
        console.log(error);
    }

}

export const loadIllistrator = () => async (dispatch, illistrators) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + key + '&image_type=illustration');
        const illistrators = await response.json();
        dispatch(loadIlistratorSuccess(illistrators));
    } catch (error) {
        console.log(error);
    }
}


export const loadVideos = () => async (dispatch, videos) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch('https://pixabay.com/api/videos/?key=' + key + '&q=yellow');
        const videos = await response.json();
        dispatch(loadVideosSuccess(videos))
    } catch (error) {
        console.log(error);
    }
}
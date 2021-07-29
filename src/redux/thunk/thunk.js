import {
    loadImagesSuccess,
    loadImagesInProgress,
    loadPhotosSuccess,
    loadVectorSuccess,
    loadIlistratorSuccess,
    loadVideosSuccess,
} from '../actions/actions.js';


const key = process.env.REACT_APP_KEY;
const url = 'https://pixabay.com/api/?key=' + key;



export const loadImages = () => async (dispatch, images) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + '&q=' + '&image_type=all');
        const images = await response.json();
        dispatch(loadImagesSuccess(images));
    } catch (error) {
        console.log(error);
    }
}

export const loadPhotos = (searchKey) => async (dispatch, photos) => {
    console.log(searchKey);
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + `&q=${searchKey || "all"}&image_type=photo&per_page=50&order=latest&page=1&category=all&min_width=0&min_height=0&safesearch=true`);
        const photos = await response.json();
        dispatch(loadPhotosSuccess(photos));
    } catch (error) {
        console.log(error);
    }
}

//&q=all
//&image_type=photo
//&colors=green
//&safesearch="true" pr "false"
//&page=1
//&per_page=50
//&category=background
//&orientation="all" or "vertical" or "Horizontal"

//&order= "popular", "latest"

//&min_width =100
//&min_height =100


export const loadVectors = () => async (dispatch, vectors) => {

    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + '&image_type=vector');
        const vectors = await response.json();
        dispatch(loadVectorSuccess(vectors));
    } catch (error) {
        console.log(error);
    }

}

export const loadIllistrator = () => async (dispatch, illistrators) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + '&image_type=illustration');
        const illistrators = await response.json();
        dispatch(loadIlistratorSuccess(illistrators));
    } catch (error) {
        console.log(error);
    }
}


export const loadVideos = () => async (dispatch, videos) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch('https://pixabay.com/api/videos/?key=' + key + '&q=all');
        const videos = await response.json();
        dispatch(loadVideosSuccess(videos))
    } catch (error) {
        console.log(error);
    }
}
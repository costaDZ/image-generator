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



export const loadImages = (searchKey = "", page = 1) => async (dispatch, images) => {

    console.log(page);
    try {

        dispatch(loadImagesInProgress());
        const response = await fetch(url + `&q=${searchKey}&image_type=all&per_page=50&order=latest&page=${page}&category=all&min_width=0&min_height=0&safesearch=true`);
        const images = await response.json();
        console.log(response);

        dispatch(loadImagesSuccess(images, searchKey, page));
    } catch (error) {
        console.log(error);
    }
}

export const loadPhotos = (searchKey = "", page = 1) => async (dispatch, photos) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + `&q=${searchKey}&image_type=photo&per_page=50&order=popular&page=${page}&category=all&min_width=0&min_height=0&safesearch=true`);
        const photos = await response.json();
        dispatch(loadPhotosSuccess(photos, searchKey, page));
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


export const loadVectors = (searchKey = "", page = 1) => async (dispatch, vectors) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + `&q=${searchKey}&image_type=vector&per_page=50&order=latest&page=${page}&category=all&min_width=0&min_height=0&safesearch=true`);
        const vectors = await response.json();
        dispatch(loadVectorSuccess(vectors, searchKey, page));
    } catch (error) {
        console.log(error);
    }

}

export const loadIllistrator = (searchKey = "", page = 1) => async (dispatch, illistrators) => {
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(url + `&q=${searchKey}&image_type=illustration&per_page=50&order=latest&page=${page}&category=all&min_width=0&min_height=0&safesearch=true`);
        const illistrators = await response.json();
        dispatch(loadIlistratorSuccess(illistrators, searchKey, page));
    } catch (error) {
        console.log(error);
    }
}

let videosUrl = 'https://pixabay.com/api/videos/?key=' + key;

export const loadVideos = (searchKey = "", page = 1) => async (dispatch, videos) => {
    let perPage = 30;
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(videosUrl + `&q=${searchKey}&video_type=all&category=all&min_width=0&min_height=0&safesearch=true&order=popular&page=${page}&per_page=${perPage}`);
        const videos = await response.json();
        dispatch(loadVideosSuccess(videos, searchKey, page, perPage))
    } catch (error) {
        console.log(error);
    }
}

//&video_type=all
//&category=all
//&min_width=0
//&min_height=0
//&safesearch=true
//&order= "popular", "latest"
//&page=1
//&per_page=3 - 200 ===> 20

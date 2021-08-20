import {
    loadImagesSuccess,
    loadImagesInProgress,
    loadVideosSuccess,
} from '../actions/actions.js';


const key = process.env.REACT_APP_KEY;
const url = 'https://pixabay.com/api/?key=' + key;
const signal = AbortController.signal;

export const loadImages = (kind = "all", searchKey = "", pageNumber = 1, perPage = 50) => async (dispatch, images) => {
    console.log("test");
    try {
        dispatch(loadImagesInProgress());
        const response =
            await fetch(url + `&q=${searchKey}&image_type=${kind}&per_page=${perPage}&order=latest&page=${pageNumber}&category=all&min_width=0&min_height=0&safesearch=true`, { signal: signal });
        const images = await response.json();
        dispatch(loadImagesSuccess(kind, images, searchKey, pageNumber, perPage));
        AbortController.abort();
    } catch (error) {
        console.log(error);
    }
}


let videosUrl = 'https://pixabay.com/api/videos/?key=' + key;
export const loadVideos = (searchKey = "", pageNumber = 1, perPage = 30) => async (dispatch, videos) => {
    // let perPage = 30;
    try {
        dispatch(loadImagesInProgress());
        const response = await fetch(videosUrl + `&q=${searchKey}&video_type=all&category=all&min_width=0&min_height=0&safesearch=true&order=popular&page=${pageNumber}&per_page=${perPage}`, { signal: signal });
        const videos = await response.json();
        dispatch(loadVideosSuccess(videos, searchKey, pageNumber, perPage))
        AbortController.abort();
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








//&video_type=all
//&category=all
//&min_width=0
//&min_height=0
//&safesearch=true
//&order= "popular", "latest"
//&page=1
//&per_page=3 - 200 ===> 20

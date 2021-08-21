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
        let { hits, total, totalHits } = images;
        dispatch(loadImagesSuccess(kind, searchKey, pageNumber, perPage, hits, total, totalHits));
        AbortController.abort();
    } catch (error) {
        console.log(error);
    }
}

let videosUrl = 'https://pixabay.com/api/videos/?key=' + key;
export const loadVideos = (kind = "all", searchKey = "", pageNumber = 1, perPage = 30) => async (dispatch, videos) => {
    try {
        console.log("----------------->", perPage);
        dispatch(loadImagesInProgress());
        const response = await fetch(videosUrl + `&q=${searchKey}&video_type=${kind}&category=all&min_width=0&min_height=0&safesearch=true&order=popular&page=${pageNumber}&per_page=${perPage}`, { signal: signal });
        const videos = await response.json();
        let { hits, total, totalHits } = videos;
        dispatch(loadVideosSuccess(kind, searchKey, pageNumber, perPage, hits, total, totalHits))
        AbortController.abort();
    } catch (error) {
        console.log(error);
    }
}

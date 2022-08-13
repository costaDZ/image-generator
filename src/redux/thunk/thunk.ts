import { AppThunk } from '../store';
import { loadImagesSuccess, loadImagesInProgress, loadVideosSuccess } from '../actions/actions';

import { AppDispatch } from '../store';

const key = process.env.REACT_APP_KEY;
const url = 'https://pixabay.com/api/?key=' + key;
const controller = new AbortController();

export const loadImages =
  (kind = 'all', searchKey = '', pageNumber = 1, perPage = 50): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadImagesInProgress());
      const response = await fetch(
        url +
          `&q=${searchKey}&image_type=${kind}&per_page=${perPage}&order=latest&page=${pageNumber}&category=all&min_width=0&min_height=0&safesearch=true`,
        { signal: controller.signal }
      );
      const images = await response.json();
      const { hits, total, totalHits } = images;
      dispatch(loadImagesSuccess(kind, searchKey, pageNumber, perPage, hits, total, totalHits));
      controller.abort();
    } catch (error) {
      console.log(error);
    }
  };

const videosUrl = 'https://pixabay.com/api/videos/?key=' + key;

export const loadVideos =
  (kind = 'all', searchKey = '', pageNumber = 1, perPage = 30): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadImagesInProgress());
      const response = await fetch(
        videosUrl +
          `&q=${searchKey}&video_type=${kind}&category=all&min_width=0&min_height=0&safesearch=true&order=popular&page=${pageNumber}&per_page=${perPage}`,
        { signal: controller.signal }
      );
      const videos = await response.json();
      const { hits, total, totalHits } = videos;
      dispatch(loadVideosSuccess(kind, searchKey, pageNumber, perPage, hits, total, totalHits));
      controller.abort();
    } catch (error) {
      console.log(error);
    }
  };

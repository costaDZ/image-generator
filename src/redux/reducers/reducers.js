
import {
    CHANGE_PAGE,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_IN_PROGRESS,
    LOAD_PHOTOS_SUCCESS,
    LOAD_VECTOR_SUCCESS,
    LOAD_ILISTRATOR_SUCCESS,
    LOAD_VIDEOS_SUCCESS,
} from "../actions/actions";

import data from '../../data/data.js';

const initialState = data;
export const nav = (state = initialState, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case CHANGE_PAGE:
            const targetData = initialState[payload];
            return targetData;
        default:
            return state;
    }

}


export const main = (state = { isLoading: true }, actions) => {

    const { type, payload } = actions;
    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_IMAGES_SUCCESS:
            const { images, searchKey, page } = payload;
            return { pic: images, searchKey, page, isLoading: false }
        default:
            return state;
    }
}


export const photos = (state = { isLoading: false }, actions) => {

    const { type, payload } = actions;
    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_PHOTOS_SUCCESS:
            const { photos, searchKey, page } = payload;
            console.log(photos);

            return { pic: photos, searchKey, page, isLoading: false }
        default:
            return state;
    }
}

export const vectors = (state = { isLoading: false }, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_VECTOR_SUCCESS:
            const { vectors, searchKey, page, } = payload;
            return { pic: vectors, searchKey, page, isLoading: false }
        default:
            return state;
    }

}

export const illistrations = (state = { isLoading: false }, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_ILISTRATOR_SUCCESS:
            const { illistrators, searchKey, page } = payload;
            console.log(searchKey, page);
            return { pic: illistrators, searchKey, page, isLoading: false }
        default:
            return state;
    }

}

export const videos = (state = { isLoading: false }, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_VIDEOS_SUCCESS:
            const { videos, searchKey, page, perPage } = payload;
            return { pic: videos, searchKey, page, perPage, isLoading: false }
        default:
            return state;
    }

}
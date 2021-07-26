
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
            const targetData = initialState[payload] || initialState["main"];
            return targetData;
        default:
            return state;
    }

}


export const images = (state = { isLoading: true }, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_IMAGES_SUCCESS:
            const { images } = payload;
            return { pic: images, isLoading: false }
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
            const { photos } = payload;
            return { pic: photos, isLoading: false }
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
            const { vectors } = payload;
            return { pic: vectors, isLoading: false }
        default:
            return state;
    }

}

export const illistrator = (state = { isLoading: false }, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_ILISTRATOR_SUCCESS:
            const { illistrators } = payload;
            return { pic: illistrators, isLoading: false }
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
            const { videos } = payload;
            return { pic: videos, isLoading: false }
        default:
            return state;
    }

}
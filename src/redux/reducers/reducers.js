import {
    CHANGE_PAGE,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_IN_PROGRESS,
    LOAD_VIDEOS_SUCCESS,
    TOGGLE_MENU,
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

export const content = (state = { isLoading: true }, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case LOAD_IMAGES_IN_PROGRESS:
            return { ...state, isLoading: true }
        case LOAD_IMAGES_SUCCESS:
        case LOAD_VIDEOS_SUCCESS:
            let { kind, searchKey, pageNumber, perPage, hits, total, totalHits } = payload;
            return { kind, searchKey, pageNumber, perPage, isLoading: false, hits, total, totalHits };
        default:
            return state;
    }
}

export const menuBtn = (state = false, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case TOGGLE_MENU:
            if (payload === 'close') {
                return { ...state, menuBtn: false }
            } else {
                return { ...state, menuBtn: !state.menuBtn }
            }
        default:
            return state;
    }
}
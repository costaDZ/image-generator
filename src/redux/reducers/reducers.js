
import {
    CHANGE_PAGE,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_IN_PROGRESS
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

// const ImagesState = { isLoading: true }

// export const images = (state = ImagesState, actions) => {

//     const { type, payload } = actions;

//     switch (type) {
//         case LOAD_IMAGES_IN_PROGRESS:
//             console.log(LOAD_IMAGES_IN_PROGRESS, state);

//             return { state }

//         case LOAD_IMAGES_SUCCESS:
//             console.log(LOAD_IMAGES_SUCCESS);
//             const { images } = payload;
//             return { images, isLoading: false }
//         default:
//             return state;
//     }

// }
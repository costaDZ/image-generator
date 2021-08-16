import { ADD_TO_DOWNLOAD, TOGGLE_DOWNLOAD_SIZES } from '../actions/downloadActions';


const initiaDownload = {
    targetImage: null,
    sizes: true,
}

export const download = (state = initiaDownload, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ADD_TO_DOWNLOAD:
            const { item } = payload;
            return { ...state, targetImage: item };
        case TOGGLE_DOWNLOAD_SIZES:
            console.log(payload);
            if (payload === "toggle") {
                console.log(state);
                return { ...state, sizes: !state.sizes }
            } else {
                return { ...state, sizes: false }
            }
        default:
            return state;
    }
}


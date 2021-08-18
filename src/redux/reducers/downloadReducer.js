import { ADD_TO_DOWNLOAD, TOGGLE_DOWNLOAD_SIZES } from '../actions/downloadActions';


const initiaDownload = {
    targetImage: null,
    extention: null,
    sizes: false,
    targetType: null,
}

export const download = (state = initiaDownload, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ADD_TO_DOWNLOAD:
            const { item } = payload;
            let extention;
            let type;
            if (!item.videos) {
                let extentionIndex = item.previewURL.lastIndexOf(".");
                extention = item.previewURL.slice(extentionIndex + 1);
                type = "image";
            } else {
                type = "video";
                extention = "hd";
            }
            return { ...state, targetImage: item, extention, targetType: type };
        case TOGGLE_DOWNLOAD_SIZES:

            if (payload === "toggle") {
                return { ...state, sizes: !state.sizes }
            } else {
                return { ...state, sizes: false }
            }
        default:
            return state;
    }
}


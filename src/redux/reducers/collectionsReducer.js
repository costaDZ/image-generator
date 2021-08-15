import {
    HANDEL_LIKED_IMAGES,
    HANDEL_COLLECTION,
    ADD_TO_DOWNLOAD
} from '../actions/actions';

export const likedItem = (state = [], actions) => {
    const { type, payload } = actions;
    switch (type) {
        case HANDEL_LIKED_IMAGES:
            const { item } = payload;
            let checkItem = state.find(i => i.id === item.id);
            if (!checkItem) {
                return [...state, item];
            } else {
                return [...state.filter(i => i.id !== item.id)];
            }
        default:
            return state;
    }
}

let initialCollection = {
    pic: {
        hits: [],
    },
    photo: 0,
    vector: 0,
    illustration: 0,
    video: 0,
}

export const myCollection = (state = initialCollection, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case HANDEL_COLLECTION:
            const { item } = payload;
            let checkItem = state.pic.hits.find(i => i.id === item.id);

            let filterKind = (type) => {
                if (type === "photo") return "photo";
                if (type === "illustration") return "illustration";
                if (type === "film" || type === "animation") return "video";
                return "vector";
            }

            if (!checkItem) {
                state[filterKind(item.type)] += 1;
                return {
                    ...state,
                    pic: {
                        hits: [...state.pic.hits, item]
                    }
                };
            } else {
                state[filterKind(item.type)] -= 1;
                return {
                    ...state,
                    pic: {
                        hits: [...state.pic.hits.filter(i => i.id !== item.id)]
                    }
                };
            }
        default:
            return state;
    }
}

export const download = (state = [], actions) => {
    const { type, payload } = actions;
    switch (type) {
        case ADD_TO_DOWNLOAD:
            const { item } = payload;
            return [item];
        default:
            return state;
    }
}
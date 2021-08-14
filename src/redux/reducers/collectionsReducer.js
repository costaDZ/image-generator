import { HANDEL_LIKED_IMAGES, HANDEL_COLLECTION } from '../actions/actions';

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
    }
}
export const myCollection = (state = initialCollection, actions) => {
    const { type, payload } = actions;

    console.log(state.pic.hits);
    switch (type) {
        case HANDEL_COLLECTION:
            const { item } = payload;
            let checkItem = state.pic.hits.find(i => i.id === item.id);
            if (!checkItem) {
                return {
                    pic: {
                        hits: [...state.pic.hits, item]
                    }
                };
            } else {
                return {
                    pic: {
                        hits: [...state.pic.hits.filter(i => i.id !== item.id)]
                    }
                };
            }
        default:
            return state;
    }
}
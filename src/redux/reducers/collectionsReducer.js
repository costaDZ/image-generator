import { HANDEL_LIKED_IMAGES, HANDEL_COLLECTION } from '../actions/actions';

export const likedItem = (state = [], actions) => {
  const { type, payload } = actions;
  switch (type) {
    case HANDEL_LIKED_IMAGES: {
      const { item } = payload;
      let checkItem = state.find((i) => i.id === item.id);
      if (!checkItem) {
        return [...state, item];
      } else {
        return [...state.filter((i) => i.id !== item.id)];
      }
    }
    default:
      return state;
  }
};

let initialCollection = {
  hits: [],
  photo: 0,
  vector: 0,
  illustration: 0,
  video: 0
};

export const myCollection = (state = initialCollection, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case HANDEL_COLLECTION: {
      const { item } = payload;
      let checkItem = state.hits.find((i) => i.id === item.id);
      let filterKind = item.type === 'film' || type === 'animation' ? 'video' : type;

      if (!checkItem) {
        state[filterKind] += 1;
        return {
          ...state,
          hits: [...state.hits, item]
        };
      } else {
        state[filterKind] -= 1;
        return {
          ...state,
          hits: [...state.hits.filter((i) => i.id !== item.id)]
        };
      }
    }
    default:
      return state;
  }
};

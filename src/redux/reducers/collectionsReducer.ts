import {
  ActionType,
  HandelLikedImagesAction,
  AddToCollectionAction
} from '../actions/actions-types';

export const likedItem = (state: Hit[] = [], actions: HandelLikedImagesAction) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.HANDEL_LIKED_IMAGES: {
      const checkItem = state.find((target) => target.id === payload.id);
      if (!checkItem) {
        return [...state, payload];
      } else {
        return [...state.filter((target) => target.id !== payload.id)];
      }
    }
    default:
      return state;
  }
};

interface InitialCollection {
  hits: Hit[];
  photo: number;
  vector: number;
  illustration: number;
  video: number;
}

const initialCollection: InitialCollection = {
  hits: [],
  photo: 0,
  vector: 0,
  illustration: 0,
  video: 0
};

export const myCollection = (state = initialCollection, actions: AddToCollectionAction) => {
  const { type, payload } = actions;

  switch (type) {
    case ActionType.HANDEL_COLLECTION: {
      const checkItem = state.hits.find((i) => i.id === payload.id);
      //const filterKind =  item.type === 'film' ? 'video' : type;
      const filterKind =
        checkItem?.type === 'film' || checkItem?.type === 'animation' ? 'video' : 'photo'; // 🔴 check this one later

      if (!checkItem) {
        state[filterKind] += 1;
        return {
          ...state,
          hits: [...state.hits, payload]
        };
      } else {
        state[filterKind] -= 1;
        return {
          ...state,
          hits: [...state.hits.filter((i) => i.id !== payload.id)]
        };
      }
    }
    default:
      return state;
  }
};

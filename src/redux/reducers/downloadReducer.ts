import {
  ActionType,
  AddToDownloadAction,
  ToggelDownloadSizeAction
} from '../actions/actions-types';

const initialState = {
  sizes: false,
  id: 0,
  extention: '',
  type: '',
  targetType: 'image' as const,
  targetSize: '',
  bigResolution: '',
  normalResolution: '',
  smallResolution: '',
  views: 0,
  downloads: 0,
  tags: [],
  tinyUrl: '',
  smallUrl: '',
  mediumUrl: '',
  largeUrl: '',
  likes: 0,
  user: '',
  userImageURL: ''
};

export const download = (
  state: Download = initialState,
  actions: AddToDownloadAction | ToggelDownloadSizeAction
): Download => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.ADD_TO_DOWNLOAD: {
      const { item } = payload;

      if (!item.videos) {
        const extentionIndex = item.previewURL.lastIndexOf('.');
        state.extention = item.previewURL.slice(extentionIndex + 1);
        state.type = 'image';
        state.targetSize = convertToMb(item.imageSize);
        state.bigResolution = item.imageWidth + '*' + item.imageHeight;
        state.normalResolution = item.webformatWidth + '*' + item.webformatHeight;
        state.smallResolution = item.previewWidth + '*' + item.previewHeight;
        state.smallUrl = item.previewURL;
        state.mediumUrl = item.webformatURL;
        state.largeUrl = item.largeImageURL;
        state.tinyUrl = '';
      } else {
        state.type = 'video';
        state.extention = 'hd';
        state.targetSize = convertToMb(item.videos.medium.size);
        state.bigResolution = item.videos.small.width + '*' + item.videos.small.height;
        state.normalResolution = item.videos.medium.width + '*' + item.videos.medium.height;
        state.tinyUrl = item.videos.tiny.url;
        state.smallUrl = item.videos.small.url;
        state.mediumUrl = item.videos.medium.url;
        state.largeUrl = item.videos.large.url;
        state.smallResolution = '';
      }

      return {
        ...state
      };
    }
    case ActionType.TOGGLE_DOWNLOAD_SIZES:
      if (payload === 'toggle') {
        return { ...state, sizes: !state.sizes };
      } else {
        return { ...state, sizes: false };
      }
    default:
      return state;
  }
};

const convertToMb = (target: number): string => (target / 1000000).toFixed(1) + ' MB';

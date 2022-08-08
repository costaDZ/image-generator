import { ActionType } from '../actions/actions-types';

export const download = (state = {}, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case ActionType.ADD_TO_DOWNLOAD: {
      const { item } = payload;
      let extention;
      let type;
      let targetSize;
      let bigResolution;
      let normalResolution;
      let smallResolution;
      let tinyUrl;
      let smallUrl;
      let mediumUrl;
      let largeUrl;

      if (!item.videos) {
        let extentionIndex = item.previewURL.lastIndexOf('.');
        extention = item.previewURL.slice(extentionIndex + 1);
        type = 'image';
        targetSize = (item.imageSize / 1000000).toFixed(1) + ' MB';
        bigResolution = item.imageWidth + '*' + item.imageHeight;
        normalResolution = item.webformatWidth + '*' + item.webformatHeight;
        smallResolution = item.previewWidth + '*' + item.previewHeight;
        smallUrl = item.previewURL;
        mediumUrl = item.webformatURL;
        largeUrl = item.largeImageURL;
      } else {
        type = 'video';
        extention = 'hd';
        targetSize = (item.videos.medium.size / 1000000).toFixed(1) + ' MB';
        bigResolution = item.videos.small.width + '*' + item.videos.small.height;
        normalResolution = item.videos.medium.width + '*' + item.videos.medium.height;
        tinyUrl = item.videos.tiny.url;
        smallUrl = item.videos.small.url;
        mediumUrl = item.videos.medium.url;
        largeUrl = item.videos.large.url;
      }
      return {
        ...state,
        id: item.id,
        extention,
        targetType: type,
        targetSize,
        bigResolution,
        normalResolution,
        smallResolution,
        views: item.views,
        downloads: item.downloads,
        tags: item.tags.split(','),
        likes: item.likes,
        type: item.type,
        tinyUrl,
        smallUrl,
        mediumUrl,
        largeUrl,
        user: item.user,
        userImageURL: item.userImageURL
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

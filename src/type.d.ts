declare module '*.mp4' {
  const src: string;
  export default src;
}

interface Nav {
  category: string;
  title: string;
  dec: string;
  back: string;
  populair: string[];
}

interface VideoSize {
  url: string;
  width: number;
  height: number;
  size: number;
}

type Videos = {
  large: VideoSize;
  medium: VideoSize;
  small: VideoSize;
  tiny: VideoSize;
};

interface Section {
  category: string;
  title: string;
  dec: string;
  back?: string;
  video?: string;
  populair: string[];
}

interface Hit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
  duration?: number;
  videos: Videos;
  picture_id?: number;
}

interface Download {
  id: number;
  extention: string;
  type: string;
  targetType: 'video' | 'image';
  targetSize: string;
  bigResolution: string;
  normalResolution: string;
  smallResolution: string;
  views: number;
  downloads: number;
  tags: string[];
  tinyUrl: string;
  smallUrl: string;
  mediumUrl: string;
  largeUrl: string;
  likes: number;
  user: string;
  userImageURL: string;
  sizes: boolean;
}

interface MyCollection {
  hits: Hit[];
  photo: number;
  vector: number;
  illustration: number;
  video: number;
}

interface Content {
  kind: string;
  searchKey: string;
  pageNumber: number;
  perPage: number;
  isLoading: boolean;
  hits: Hit[];
  total: number;
  totalHits: number;
  pic: string | number;
}

type Page = 'all' | 'photo' | 'illustration' | 'vector' | 'videos';

type LikedItems = Hit[];

type MenuBtn = {
  menuBtn: boolean;
};

type Download = Hit;

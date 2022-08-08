interface Nav {
  category: string;
  title: string;
  dec: string;
  back: string;
  populair: string[];
}

interface Hit {
  id: number;
  pageURL: string;
  type: string;
  tags: string | string[];
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
}

type LikedItems = Hit[];

type MenuBtn = {
  menuBtn: boolean;
};

type Download = Hit;

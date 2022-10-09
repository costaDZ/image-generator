import { connector } from './infoBox.selectors';
import { ConnectedProps } from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface InfoBoxContainerProps extends PropsFromRedux {
  id: number;
  data: Hit;
  videos: Videos;
  tags: string;
  kind: 'video' | 'image';
  duration: number | undefined;
  likes: number;
  currentLocation: string;
  LoadMainImages: (kind: string, key: string, page: number, perpage: number) => void;
  startSearchingVideos: (kind: string, searchKey: string, page: number, perpage: number) => void;
  comments: number;
  goToDownload: (item: Hit) => void;
}

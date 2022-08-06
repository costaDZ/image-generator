import React from 'react';
import { ImagesHolder } from '../../components';

interface PhotosProps {
  getPhotos: any;
  startLoadingPhotos: any;
}

function Photos({ getPhotos, startLoadingPhotos }: PhotosProps): React.ReactElement {
  return <ImagesHolder />;
}

export default Photos;

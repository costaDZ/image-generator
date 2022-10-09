import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ReactPlayer from 'react-player';

import { BigImageStyles } from './BigImage.style';

interface BigImageViewProps {
  targetType: string;
  info: Download;
}

const BigImageView = ({ info, targetType }: BigImageViewProps) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loaderTrigger = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(loaderTrigger);
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <BigImageStyles>
      {targetType === 'video' ? (
        <ReactPlayer
          className="react_player"
          controls
          url={info.tinyUrl}
          width="100%"
          height="100%"
        />
      ) : (
        <picture>
          <source media="(min-width:650px)" srcSet={info.largeUrl} />
          <img src={info.mediumUrl} alt="Flowers" />
        </picture>
      )}
    </BigImageStyles>
  );
};

export default BigImageView;
